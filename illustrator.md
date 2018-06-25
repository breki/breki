## Navigation
- Z - Zoom tool
  - Holding space turns on Hand tool
  - Holding SHIFT enables zooming in to a rectangle                 
  - Left-click and dragging zooms in continuously
  - Holding ALT switched to zoom out

## Selection
- V - Selection tool
- A - Direct Selection tool
- Shift+Ctrl+A - deselect everything
- Q - Lasoo Tool - select objects by dragging around all or part of the object
- you can use Selection and Direction tools and draw a rectangle marquee to select objects, **but make sure you are NOT drawing the rectangle above an object (like map background)**

### Locking
- Select objects and then press Ctrl+2 to lock them.a

## Measuring
- Ctrl+R - turns on rulers
- To measure object properties: switch on Document Info panel, click on its settings and select Objects. Then it will show properties of selected objects.

## Layers
- Hiding Everything Except… - Select an object of the layer you want to work with and then run the Object -> Hide -> Other Layers menu command

## Layout
- Use workspaces - I created my own called Map making

## Smoothing of paths
Found [Script for Simplifying Paths](http://kelsocartography.com/blog/?p=2205), downloadable from [GitHub](https://github.com/nvkelso/jim-heck-pinball-scripts). Place all .jsx files into the `C:\Program Files\Adobe\Adobe Illustrator CC 2018\Presets\en_US\Scripts` directory (note this will change with new versions of Illustrator and I don't know if it automatically copies user scripts to a new location). 

Restart Illustrator, now you can find the scripts under the `File` | `Scripts` menu item. I tried `RemoveRedundantPoints.V1.8` and it seems to be working.


# Scripting

## Troubleshooting
Sometimes when a new Illustrator version arrives, it doesn't properly update the scripting API and you get errors like

    System.InvalidCastException: Unable to cast COM object of type 'System.__ComObject' 
    to interface type 'Illustrator.Application'. 
    This operation failed because the QueryInterface call on the COM component for the interface with IID
    '{95CD20AA-AD72-11D3-B086-0010A4F5C335}' failed due to the following error: 
    No such interface supported (Exception from HRESULT: 0x80004002 (E_NOINTERFACE)).
    
In this case, uninstall all versions of Illustrator, install the latest one, re-add Illustrator reference in the C# project, rebuild and try again.
