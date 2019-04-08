# Adobe Illustrator plugins development tips and tricks

## Requirements
-`Build Windows desktop applications using the Microsoft C++ toolset, ATL, or MFC.` feature (in VS 2017).
- VC++ MFC support installed for Visual Studio.
- Windows SDK (currently 10)
- Resharper for C++

## Tips and tricks
- make sure you build 64-bit executables, otherwise you will get `Error loading plugins` error message in Illustrator.

## Useful resources 

### Open-source plugins
- [Ai2Canvas](https://github.com/mikeswanson/Ai2Canvas)
- [Bloks](https://github.com/WestonThayer/Bloks)

### Troubleshooting problems with loading plugins
- [Error loading plugin on Windows](https://forums.adobe.com/thread/2508119)
- [Error loading plugins CC 2014](https://forums.adobe.com/message/7868616#7868616)
- [Hello World - not working for 64bit illustrator](https://forums.adobe.com/thread/1919755)
