# Chocolatey

## Usages
- `clist -l --idonly` - lists all local packages (just the names, useful to make the list in the section below)
- `cup all -y` - updates all local packages
- `choco pin add --name=nodejs --version=11.13.0` - pins a package to a specific version (so it does not get updated to a higher one)

## Chocolatey package file

You can install all these packages in a batch by saving the contents to a `packages.config` file and then running `cinst packages.config -y` (make sure the file is named `packages.config`, otherwise it won't work).

```xml
<?xml version="1.0" encoding="utf-8"?>
<packages>
  <package id="7zip" />
  <package id="7zip.install" />
  <package id="adobereader" />
  <package id="audioswitcher" />
  <package id="authy-desktop" />
  <package id="autohotkey" />
  <package id="autohotkey.install" />
  <package id="boxcryptor" />
  <package id="chocolatey" />
  <package id="chocolatey-core.extension" />
  <package id="chocolatey-windowsupdate.extension" />
  <package id="cmder" />
  <package id="dotnet4.7.2" />
  <package id="dotnetcore-sdk" />
  <package id="dotnetfx" />
  <package id="dropbox" />
  <package id="filezilla" />
  <package id="foobar2000" />
  <package id="git" />
  <package id="git.install" />
  <package id="gnucash" />
  <package id="googlechrome" />
  <package id="googledrive" />
  <package id="greenshot" />
  <package id="InkScape" />
  <package id="jbs" />
  <package id="josm" />
  <package id="keepass" />
  <package id="libreoffice" />
  <package id="MarkdownMonster" />
  <package id="microsoft-build-tools" />
  <package id="netfx-4.7.2-devpack" />
  <package id="ncrunch-vs2019" />
  <package id="nodejs" />
  <package id="notepadplusplus" />
  <package id="notepadplusplus.install" />
  <package id="paint.net" />
  <package id="plantuml" />
  <package id="procexp" />
  <package id="putty" />
  <package id="putty.portable" />
  <package id="resharper-platform" />
  <package id="synctrayzor" />
  <package id="tortoisegit" />
  <package id="tortoisehg" />
  <package id="vcredist140" />
  <package id="vcredist2015" />
  <package id="visualstudio-installer" />
  <package id="visualstudio2019community" />
  <package id="visualstudio2019-workload-manageddesktop" />
  <package id="visualstudio2019-workload-netweb" />
  <package id="vmware-workstation-player" />
  <package id="windirstat" />
</packages>
```

## Additional packages

```xml
<?xml version="1.0" encoding="utf-8"?>
<packages>
  <package id="coretemp" />
  <package id="exercism-io-cli" />
  <package id="firefox" />
  <package id="garmin-express" />
  <package id="graphviz" />
  <package id="hxd" />
  <package id="nomachine" />
  <package id="postman" />
  <package id="pgadmin4" />
  <package id="postgresql" />
  <package id="procexp" />
  <package id="qgis" />
  <package id="tightvnc" />
  <package id="vlc" />
  <package id="windows-sdk-10.1" />
</packages>
```
