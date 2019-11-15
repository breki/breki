# Visual Studio And Resharper Knowledgebase

## Visual Studio

### Performance
* [Speed Up Build Times By Using BitDefender Exclusions](https://ardalis.com/speed-up-visual-studio-build-times)

#### Viewing & Editing XSD As XML
By default, Visual Studio opens an XSD document with a visual designer. If you want to view and edit XSD simply as an XML document, use "Open with..." context menu option.

### Extensions Used
- [Color Theme Editor](https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.VisualStudio2017ColorThemeEditor)
- [Editor Guidelines](https://marketplace.visualstudio.com/items?itemName=PaulHarrington.EditorGuidelines)
- [GhostDoc Community](https://submain.com/products/ghostdoc.aspx)
- [HgSccPackage](https://bitbucket.org/zzsergant/hgsccpackage/wiki/Home)
- [Layouts O Rama](http://www.type5dev.com/LayoutsORama)
- [NCrunch](https://www.ncrunch.net/)
- [ReSharper](https://www.jetbrains.com/resharper/)
- [Theme Switcher](https://github.com/frankschierle/ThemeSwitcher)
- [WakaTime](https://github.com/wakatime/visualstudio-wakatime)

## Resharper

### Keyboard Shortcuts
#### Enabling Shorcuts Browser
* In ReSharper | Options | Environment | Keyboard & Menus | Enable Shortcut Browser checkbox
* Press left Ctrl key 3 times in a row within 1.5 seconds
* Note that within the browser, if you press on Ctrl, Alt or Shift (or combinations), it will show shortcuts using these modifiers

#### Re-enabling "Go To File Member" Shortcut
For some reason, new versions of R# (year 2017) no longer have the `Alt+\` (Go to file member) shortcut. To re-enable it, go to VS keyboard customization dialog and add `ReSharper.ReSharper_GotoFileMember` shortcut.

### Settings to make sure you have
- `Code Editing / C# / Formatting Style / Line Breaks and Wrapping / Keep existing line breaks` should be unchecked
- `Code Editing / C# / Formatting Style / Line Breaks and Wrapping / Hard wrap at` should be set to `80`
- `Code Editing / C# / Code Style / 'var' Usage in Declarations` should all be set to `Use explicit type`

### Troubleshooting
#### Solution-Wide Analysis
Sometimes (when moving projects, for example), R# Solution-Wide Analysis does not detect the newly moved projects and reports missing references. Solution: unload and reload the project in Visual Studio.

#### xUnit tests not being recognized
First of all, you need `xunit.runner.visualstudio` NuGet package installed in your test project. If this still doesn't help, clear Resharper cache and restart Visual Studio.

## Keyboard shortcuts I'm using in VS/R#
This is a growing list of keyboard shortcuts I'm using. The idea is to then try to map these to Rider/VS Code/IntelliJ

- `Ctrl+Shift+B` - build solution
- `Shift+Alt+B` - rebuild solution
- `Shift+Alt+PgDn`/`Shift+Alt+PgUp` - next/previous error in solution
- `F8`/`Shift+F8` - next/previous build error
