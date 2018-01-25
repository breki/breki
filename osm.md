# OpenStreetMap Knowledgebase

## How To
### Extract administrative boundaries as shapefiles
1. Open QGIS.
1. Install `QOSM` and `OpenLayers` plugins, if not already installed.
1. Select `Web`/`OpenLayers plugin`/`OpenStreetMap`/`OpenStreetMap` menu item. This will add an OpenStreetMap layer to the map.
1. Move to the area of your interest. The visible map extents will serve as the download bbox.
1. Select `Vector`/`Quick OSM`/`QuickOSM` menu item to start the Quick OSM plugin.
1. In the `Quick query` tab item, enter `admin_level` under the `Key` textbox and `6` (as an example) for `Value`. Make sure `Extents of the map canvas` option is checked.
1. `Run query`. It will produce 3 new vector layers (point, polyline and polygon) that you can save as shapefiles.

Tested in QGIS 2.18.12.
