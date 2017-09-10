# Visual Studio And Resharper Knowledgebase

## Visual Studio

#### Viewing & Editing XSD As XML
By default, Visual Studio opens an XSD document with a visual designer. If you want to view and edit XSD simply as an XML document, use "Open with..." context menu option.

## Resharper

### Keyboard Shortcuts
#### Enabling Shorcuts Browser
* In ReSharper | Options | Environment | Keyboard & Menus | Enable Shortcut Browser checkbox
* Press left Ctrl key 3 times in a row within 1.5 seconds
* Note that within the browser, if you press on Ctrl, Alt or Shift (or combinations), it will show shortcuts using these modifiers

#### Re-enabling "Go To File Member" Shortcut
For some reason, new versions of R# (year 2017) no longer have the `Alt+\` (Go to file member) shortcut. To re-enable it, go to VS keyboard customization dialog and add `ReSharper.ReSharper_GotoFileMember` shortcut.

### Troubleshooting
#### Solution-Wide Analysis
Sometimes (when moving projects, for example), R# Solution-Wide Analysis does not detect the newly moved projects and reports missing references. Solution: unload and reload the project in Visual Studio.

