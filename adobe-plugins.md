# Adobe Illustrator plugins development tips and tricks

## Tips and tricks
- you need `Build Windows desktop applications using the Microsoft C++ toolset, ATL, or MFC.` feature (in VS 2017).
- you need to have VC++ MFC support installed for Visual Studio.
- also install Resharper for C++
- make sure you build 64-bit executables, otherwise you will get `Error loading plugins` error message in Illustrator.

## Useful resources 

### Open-source plugins
- [Ai2Canvas](https://github.com/mikeswanson/Ai2Canvas)
- [Bloks](https://github.com/WestonThayer/Bloks)

### Troubleshooting problems with loading plugins
- [Error loading plugin on Windows](https://forums.adobe.com/thread/2508119)
- [Error loading plugins CC 2014](https://forums.adobe.com/message/7868616#7868616)
- [Hello World - not working for 64bit illustrator](https://forums.adobe.com/thread/1919755)
