%global __os_install_post %{nil}
%global __spec_install_post %{nil}
%global debug_package %{nil}
%define _build_id_links none

Name:           slack
Version:        4.47.69
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
* Wed Apr 02 2025 Slack Repack <noreply@slack.com> - 4.47.69-0.1.el8
- Repacked for aarch64/arm64
