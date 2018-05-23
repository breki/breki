## Navigation
- Z - Zoom tool
  - Holding space turns on Hand tool
  - Holding SHIFT enables zooming in to a rectangle                 
  - Left-click and dragging zooms in continuously
  - Holding ALT switched to zoom out

## Selection
- A - Direct Selection tool
- Shift+Ctrl+A - deselect everythinga

## Measuring
- Ctrl+R - turns on rulers
- To measure object properties: switch on Document Info panel, click on its settings and select Objects. Then it will show properties of selected objects.

## Layers
- Hiding Everything Except… - Select an object of the layer you want to work with and then run the Object -> Hide -> Other Layers menu command

## Layout
- Use workspaces - I created my own called Map making

# Scripting

## Troubleshooting
Sometimes when a new Illustrator version arrives, it doesn't properly update the scripting API and you get errors like

    System.InvalidCastException: Unable to cast COM object of type 'System.__ComObject' 
    to interface type 'Illustrator.Application'. 
    This operation failed because the QueryInterface call on the COM component for the interface with IID
    '{95CD20AA-AD72-11D3-B086-0010A4F5C335}' failed due to the following error: 
    No such interface supported (Exception from HRESULT: 0x80004002 (E_NOINTERFACE)).
    
In this case, uninstall all versions of Illustrator, install the latest one, re-add Illustrator reference in the C# project, rebuild and try again.
