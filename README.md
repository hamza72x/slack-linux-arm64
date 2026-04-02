# Slack 4.47.69 for Linux arm64/aarch64

Slack doesn't ship a Linux arm64 package. This repo repacks the official x86_64 RPM for aarch64 by swapping out all architecture-specific binaries.

Built entirely by Claude Opus 4.6.

![Slack running on Linux arm64](screenshot.png)

## Quick start

**Standalone (no install):**
```sh
# extract slack-4.47.69-arm64.tar.xz
./slack-4.47.69-arm64/slack
```

**RPM install:**
```sh
sudo dnf install ./slack-4.47.69-0.1.el8.aarch64.rpm
slack
```

## What was changed

### Electron 39.2.4 binaries (x86_64 → arm64)

Source: https://github.com/electron/electron/releases/tag/v39.2.4 (`electron-v39.2.4-linux-arm64.zip`)

| File | Type |
|------|------|
| `slack` | Main Electron binary |
| `chrome_crashpad_handler` | Crash reporter |
| `chrome-sandbox` | Sandbox binary |
| `libEGL.so` | EGL library |
| `libGLESv2.so` | OpenGL ES library |
| `libffmpeg.so` | FFmpeg codec library |
| `libvk_swiftshader.so` | SwiftShader Vulkan |
| `libvulkan.so.1` | Vulkan loader |
| `snapshot_blob.bin` | V8 snapshot |
| `v8_context_snapshot.bin` | V8 context snapshot |
| `icudtl.dat` | ICU data |
| `resources.pak` | Chromium resources |
| `chrome_100_percent.pak` | UI resources @1x |
| `chrome_200_percent.pak` | UI resources @2x |
| `vk_swiftshader_icd.json` | Vulkan ICD config |
| `locales/*.pak` | All locale files |

### Native Node modules (x86_64 → arm64)

| Module | Source |
|--------|--------|
| `keymapping.node` | Built from npm [`native-keymap@2.2.2`](https://www.npmjs.com/package/native-keymap/v/2.2.2) |
| `slackdesktoputils.node` | arm64 prebuild from `slack-desktop-native-prebuilds.s3.amazonaws.com` |
| `electron_native_auth.node` | Built from npm [`electron-native-auth@0.1.1`](https://www.npmjs.com/package/electron-native-auth/v/0.1.1) |
| `file_handler_info.node` | Built from npm [`file-handler-info@0.2.1`](https://www.npmjs.com/package/file-handler-info/v/0.2.1) |
| `cf-prefs.node` | Minimal arm64 N-API stub (macOS-only, no-op on Linux) |
| `registry.node` | Minimal arm64 N-API stub (Windows-only, no-op on Linux) |
| `focusassist.node` | Minimal arm64 N-API stub (Windows-only, no-op on Linux) |
| `notificationstate.node` | Minimal arm64 N-API stub (macOS-only, no-op on Linux) |

### Scripts modified

- `etc/cron.daily/slack` — `DEFAULT_ARCH` changed from `x86_64` to `aarch64`, `get_lib_dir()` updated to handle `aarch64`

### Removed

- `usr/lib/.build-id/` — stale x86_64 build IDs

### Untouched

- `app.asar` — the entire JS application
- All sound files, icons, desktop entry, metainfo, symlinks

## Source RPM

Original package: `slack-4.47.69-0.1.el8.x86_64.rpm` from Slack.com
