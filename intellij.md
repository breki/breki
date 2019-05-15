# IDEA IntelliJ settings

## VS/Resharper-like keyboard shorcuts
IntellijJ's own Visual Studio keyboard scheme is not really very VS-like, so I prepared my own that tries to resemble Visual Studio and (in particular) Reshaper's one. Follow the procedure below if you want to use these shortcuts:

1. In IntelliJ, choose `File | Import Settings...` menu option.
2. Browse to your local CallHome git repository and find `settings/idea-VS-keyboard-shorcuts.jar` file.
3. In the `Select Components to Import` dialog, you should only have one option (`Key maps (schemes)`), which you should select and press `OK` button.
4. Restart IntelliJ.
5. Select `File | Settings` menu and under the `Keymap` tab, choose `Visual Studio copy` keymap scheme in the list box.

### Updating the keyboard settings file
These instructions are for updating the settings file in the source control (in case some new keyboard shortcuts are added later and you want to share them with the team):

1. `File | Export Settings`
1. Only choose `UI Settings` and overwrite the existing `.jar` file.
1. Rename `.jar` to `.zip` and open the contents of the archive.
1. Remove all folders except `keymaps`. **Do not** remove `installed.txt` and `IntelliJ IDEA Global Settings` files.
1. Rename the archive file back to `.jar`
