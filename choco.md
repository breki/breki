# Chocolatey

## Usages
- `clist -l --idonly` - lists all local packages (just the names, useful to make the list in the section below)
- `cup all -y` - updates all local packages

## Chocolatey package file

You can install all these packages in a batch by saving the contents to a `packages.config` file and then running `cinst package.config -y`

```xml
<?xml version="1.0" encoding="utf-8"?>
<packages>
  <package id="7zip" />
  <package id="7zip.install" />
  <package id="audioswitcher" />
  <package id="autohotkey" />
  <package id="autohotkey.install" />
  <package id="boxcryptor" />
  <package id="chocolatey" />
  <package id="chocolatey-core.extension" />
  <package id="chocolatey-windowsupdate.extension" />
  <package id="dotnet4.7.1" />
  <package id="dropbox" />
  <package id="filezilla" />
  <package id="foobar2000" />
  <package id="git" />
  <package id="git.install" />
  <package id="greenshot" />
  <package id="InkScape" />
  <package id="josm" />
  <package id="keepass" />
  <package id="MarkdownMonster" />
  <package id="microsoft-build-tools" />
  <package id="notepadplusplus" />
  <package id="notepadplusplus.install" />
  <package id="paint.net" />
  <package id="procexp" />
  <package id="putty" />
  <package id="putty.portable" />
  <package id="synctrayzor" />
  <package id="tortoisegit" />
  <package id="tortoisehg" />
  <package id="vcredist140" />
  <package id="vcredist2015" />
  <package id="visualstudio2017-installer" />
  <package id="visualstudio2017buildtools" />
  <package id="vmware-workstation-player" />
</packages>
```
