# AI Agent Instructions: Repack Slack x86_64 RPM for arm64

You are repacking the official Slack desktop RPM (x86_64) for Linux arm64/aarch64. Slack is an Electron app. The JS application (`app.asar`) is architecture-independent. Only the Electron runtime and native Node modules are architecture-specific.

## Prerequisites

- Fedora arm64 (or similar) with: `gcc`, `g++`, `make`, `node`, `npm`, `rpmbuild`, `rpm2cpio`, `cpio`, `unzip`
- `libX11-devel` and `libxkbfile-devel` installed (needed to compile `native-keymap`)
- The new Slack x86_64 RPM file

## Step-by-step procedure

### 1. Determine versions

Extract the RPM and read `usr/lib/slack/version` to get the **Electron version**. This is critical — you must download the exact matching arm64 Electron release.

Extract `app.asar` with `npx asar extract` and read `node_modules/*/package.json` for each native module to get their **exact versions**.

### 2. Extract the RPM

```sh
mkdir extracted && cd extracted
rpm2cpio ../slack-VERSION.x86_64.rpm | cpio -idmv
```

### 3. Download arm64 Electron

From: `https://github.com/electron/electron/releases/download/v{ELECTRON_VERSION}/electron-v{ELECTRON_VERSION}-linux-arm64.zip`

Replace these files in `usr/lib/slack/` with their arm64 equivalents from the zip:

- `slack` ← `electron` (rename `electron` to `slack`)
- `chrome_crashpad_handler`
- `chrome-sandbox`
- `libEGL.so`
- `libGLESv2.so`
- `libffmpeg.so`
- `libvk_swiftshader.so`
- `libvulkan.so.1`
- `snapshot_blob.bin`
- `v8_context_snapshot.bin`
- `icudtl.dat`
- `resources.pak`
- `chrome_100_percent.pak`
- `chrome_200_percent.pak`
- `vk_swiftshader_icd.json`
- `locales/*.pak` (all locale paks)

Do NOT replace `usr/lib/slack/resources/` — that contains the Slack app itself.

### 4. Replace native Node modules

All `.node` files under `usr/lib/slack/resources/app.asar.unpacked/node_modules/` are x86_64 ELF shared objects. They must all be replaced with arm64 versions.

**Real Linux modules (rebuild from source via npm):**

| Module | npm package | Install command |
|--------|-------------|-----------------|
| `@tinyspeck/native-keymap` | `native-keymap` (public fork) | `npm install native-keymap@{VERSION} --build-from-source` |
| `electron-native-auth` | `electron-native-auth` | `npm install electron-native-auth@{VERSION} --build-from-source` |
| `file-handler-info` | `file-handler-info` | `npm install file-handler-info@{VERSION} --build-from-source` |

After building, copy the `.node` file from `node_modules/{pkg}/build/Release/` to the corresponding path under `app.asar.unpacked/`.

**Proprietary module (download prebuild from Slack's S3):**

`@tinyspeck/slack-desktop-utils` is not on npm. Read its `package.json` `binary` field to construct the download URL. The pattern is:

```
https://slack-desktop-native-prebuilds.s3.amazonaws.com/{module_name}-v{version}-napi-v{napi_build_version}-linux-arm64.tar.gz
```

For example: `slackdesktoputils-v1.18.7-napi-v8-linux-arm64.tar.gz`

Extract and copy the `.node` file to `app.asar.unpacked/node_modules/@tinyspeck/slack-desktop-utils/lib/binding/napi-v{N}/`.

**Platform stubs (macOS/Windows-only, no-ops on Linux):**

These modules are tiny (~5-6KB), export zero real symbols, and do nothing on Linux. Compile a minimal arm64 N-API stub:

```c
#include <stddef.h>
typedef struct napi_env__ *napi_env;
typedef struct napi_value__ *napi_value;
napi_value napi_register_module_v1(napi_env env, napi_value exports) {
    return exports;
}
```

```sh
gcc -shared -fPIC -o empty_module.node empty_napi_module.c
```

Copy this stub to replace:
- `cf-prefs/build/Release/cf-prefs.node`
- `registry-js/build/Release/registry.node`
- `windows-focus-assist/build/Release/focusassist.node`
- `macos-notification-state/build/Release/notificationstate.node`

### 5. Fix scripts

In `etc/cron.daily/slack`:
- Change all `DEFAULT_ARCH="x86_64"` to `DEFAULT_ARCH="aarch64"`
- In `get_lib_dir()`, add `|| [ "$DEFAULT_ARCH" = "aarch64" ]` to the x86_64 branch so aarch64 maps to `lib64`

### 6. Clean up

- Remove `usr/lib/.build-id/` entirely (contains stale x86_64 build IDs)

### 7. Verify

Run this to confirm zero x86_64 binaries remain:

```sh
find extracted -type f \( -name "*.so" -o -name "*.so.*" -o -name "*.node" -o -name "slack" -o -name "chrome_crashpad_handler" -o -name "chrome-sandbox" \) -exec file {} \; | grep x86-64
```

Must produce no output.

### 8. Create standalone directory

Copy `usr/lib/slack/*` and `usr/share/pixmaps/slack.png` into a standalone directory (e.g., `slack-{VERSION}-arm64/`). Create a `.desktop` file pointing to the `slack` binary and icon.

### 9. Build RPM

Use this spec template (update Version/Release/changelog):

```spec
%global __os_install_post %{nil}
%global __spec_install_post %{nil}
%global debug_package %{nil}
%define _build_id_links none

Name:           slack
Version:        {VERSION}
Release:        0.1.el8
Summary:        Slack Desktop
License:        MIT
URL:            https://github.com/tinyspeck/slack-desktop.git
BuildArch:      aarch64
Requires:       libXScrnSaver
Requires:       libappindicator-gtk3
Requires:       libsecret
AutoReqProv:    no

%description
Slack Desktop

%install
mkdir -p %{buildroot}
cp -a %{_sourcedir}/extracted/* %{buildroot}/

%files
%attr(0755, root, root) /usr/bin/slack
/usr/lib/slack
%attr(4755, root, root) /usr/lib/slack/chrome-sandbox
%attr(0755, root, root) /usr/lib/slack/slack
%attr(0755, root, root) /usr/lib/slack/chrome_crashpad_handler
%attr(0755, root, root) /usr/lib/slack/libEGL.so
%attr(0755, root, root) /usr/lib/slack/libGLESv2.so
%attr(0755, root, root) /usr/lib/slack/libffmpeg.so
%attr(0755, root, root) /usr/lib/slack/libvk_swiftshader.so
%attr(0755, root, root) /usr/lib/slack/libvulkan.so.1
/usr/share/applications/slack.desktop
/usr/share/metainfo/slack.metainfo.xml
/usr/share/pixmaps/slack.png
/etc/cron.daily/slack

%changelog
```

Build with:

```sh
rpmbuild -bb \
  --define "_topdir $RPMBUILD_DIR" \
  --define "_sourcedir $RPMBUILD_DIR/SOURCES" \
  --define "__spec_install_post %{nil}" \
  --define "__os_install_post %{nil}" \
  --define "debug_package %{nil}" \
  --define "_build_id_links none" \
  --target aarch64 \
  slack.spec
```

Link the `extracted/` directory into `$RPMBUILD_DIR/SOURCES/extracted` before building.

## Version-sensitive notes

- The **Electron version** will change with Slack updates. Always read `usr/lib/slack/version` from the new RPM.
- The **native module versions** may change. Always extract `app.asar` and check each `package.json`.
- The **S3 prebuild URL** for `slack-desktop-utils` depends on the version and napi version from its `package.json` `binary` field. If the prebuild doesn't exist for a new version, the build will fail and you'll need to find an alternative.
- The **list of native modules** may change between Slack versions. Always check what `.node` files exist under `app.asar.unpacked/` and handle each one.
- The **stub modules** (cf-prefs, registry-js, windows-focus-assist, macos-notification-state) are platform-specific no-ops. If new similar modules appear, check their size and exported symbols — if they're tiny with no real exports, they're stubs.

## Outputs

You should produce two artifacts:
1. `slack-{VERSION}-arm64/` — standalone directory, run `./slack` directly
2. `slack-{VERSION}-0.1.el8.aarch64.rpm` — installable RPM package
