# Azurite Mapmaking Knowledgebase

## Overpass Queries

### Using "multi" (regular expressions-based) queries when possible
When fetching OSM entities with more than one possible value for the same tag, use `import_ways_multi` instead of `import_ways` (and corresponding methods for nodes and areas). In my experience (depending on the actual query), it means from 20 to 25% quicker query response time.

## Thumbnails
Thumbnail settings are specified by the `thumbs` tag, either for the template or for the individual map(s):
```xml
<thumbs style="inset-circle"/>
  <detail>15.978653,48.099203,16.819656,48.365694</detail>
</thumbs>
```

There are several styles of map thumbnails:
- `inset-circle`: the default one, renders a circular zoomed-in inset on the top right of the map. 
- `overview`: the thumbnails will be rendered without any insets.
- `inset-diag`: thumbnail image will be split up along a diagonal line, one half having the overview map and one the zoomed-in inset one.
- `inset-horiz`: thumbnail image will be split up along a center horizontal line, one half having the overview map and one the zoomed-in inset one.
- `inset-vert`: thumbnail image will be split up along a center vertical line, one half having the overview map and one the zoomed-in inset one.

The area covered by the inset is specified by the `detail` tag (as in the example above). If not specified, the center of the map area will be used.

## Features
### Showing villages
By default, villages are shown at zoom level 12 (1 : 144,000) and above. To configure at what zoom level to show villages, add `village-min-zoom` custom property:
```xml 
<props>
  <village-min-zoom>13</village-min-zoom>
</props>
```
### Showing hamlets
By default, hamlets are shown at zoom level 13 (1 : 72,000) and above. To configure at what zoom level to show villages, add `hamlet-min-zoom` custom property:
```xml 
<props>
  <hamlet-min-zoom>13</hamlet-min-zoom>
</props>
```

### Administrative boundaries
It is possible to specify which administrative boundaries' levels (`admin_level`) should be fetched from Overpass. Sometimes this is necessary because we want to skip a certain level (usually level 3) and show a lower one, which causes the boundary ways which belong both levels to not be shown on the map - this is due to the fact the algorithm remembers the highest admin level, which is then not configured to be shown on the map.

To specify which levels to fetch, use 'admin-levels' custom property:
```xml
<props>
  <admin-levels>2,4</admin-levels>
</props>
```

## Sea Topology
OSM coastline ways need to be specified so the land is on the left side and water on the right side of the way.

### Troubleshooting
There are several mechanisms for troubleshooting problems with sea topology, described in the following subsections.

#### Coastline theme
A special `coastline` map theme fetches only the coastline data from OSM, so it is easier to debug.

#### The Debug mode
You can use the debug mode (`-debug` command line switch) when rendering, which renders the complete coastline polylines, the tiles grid, tile IDs and tile types.

#### Ignoring sea topology generation problems
`SeaTopologyGenerator.GenerateSeaTopology()` method contains an empty catch block that just rethrows the exception. If the `throw;` is commented, the sea topology is still rendered (albeit in an incomplete way). 

#### Using OSM Inspector
[OSM Inspector/Views/Coastline](http://tools.geofabrik.de/osmi/?view=coastline) tool for checking if there are any errors in the OSM coastline data.

#### `seatopo.png` bitmap file
This is an older tool for sea topology diagnostics, `SeaTopologyResolver.ResolveLevel()` method catches exceptions and renders the topology into a `seatopo.png` bitmap file. It is probably not as useful as rendering the SVG map in the Debug mode.

#### Clipping problems with invalid coastlines
Sometimes the OSM coastline is wrongly tagged or oriented (like islands inside land or wrongly oriented inland seas/salt lakes). This causes problems when clipping the coastline. In that case, the Mapmaker aborts the mapmaking process, reports the error (and sea tile ID) and also records the whole contents of the sea tile into a GeoJSON file which can then be visualized using a [GeoJSON viewer](http://geojson.io).

There are two workaround for such problems:

##### 1. Reversing the orientation of problematic OSM ways:
You can achieve this by specifying at least one OSM way which needs reversing (all other ways that form the same coastline polyline/polygon will be automatically reversed). You specify the list of ways using the `osm/coastline-ways-to-reverse` element:
```xml
<osm>
    <coastline-ways-to-reverse>545015840</coastline-ways-to-reverse>
</osm>
```

##### 2. Ignoring the problematic OSM ways:
You can achieve this by specifying at least one OSM way which should be ignored (all other ways that form the same coastline polyline/polygon will also be ignored automatically). You specify the list of ways using the `osm/coastline-ways-to-ignore` element:
```xml
<osm>
    <coastline-ways-to-ignore>353168768,23285876</coastline-ways-to-ignore>
</osm>
```

##### 3. Nuclear option: ignoring all of the coastline
The nuclear option is to disable sea topology generation altogether (this is what I had to do for a certain map that includes St. Lawrence strait since it is mapped so poorly and for Moscow map since the data returned by Overpass somehow included OSM coastline ways 5500 km far away). This can be achieved by specifying `osm/ignore-coastline` switch:
```xml
<osm>
    <ignore-coastline />
</osm>
```

#### Problems with inconsistent orientation
When rendering the sea topology, `SeaStencil` verifies that all the polygon rings on the same level of hierarchy have the same orientation. This is just a sanity check that should pass if everything is OK with the coastline data. If the test fails, the Mapmaker aborts the mapmaking process, reports the error (and sea tile ID) and also records the whole contents of the sea tile into a GeoJSON file which can then be visualized using a [GeoJSON viewer](http://geojson.io).

As a workaround for this problem, you can specify the `allow-sea-rings-with-diff-orientations` custom property and set its value to `true` to skip the orientation check:
```xml 
<props>
  <allow-sea-rings-with-diff-orientations>True</allow-sea-rings-with-diff-orientations>
</props>
```

After doing so, make sure the coastline is rendered properly.

## Toponyms
### Using different OSM tag for toponyms
By default, `name` tag is used (if it exists, otherwise the toponym is ignored). To make a map using a different OSM tag for toponyms, use `use-specific-names-only` custom property specifying which OSM tag to use:
```xml 
<props>
  <use-specific-names-only>name:sr-Latn</use-specific-names-only>
</props>
```
Note that if the OSM feature does not have this tag, it will be ignored (no other tag will be used as a fallback).
Also note that you need to recreate the Azurite map database (`-rcrdb` command line argument) when you change or add this property, since it affects which OSM tags are extracted from OSM data and saved into the database.

#### Using the fallback mechanism instead
If you specify an empty value for the property, like
```xml 
<props>
  <use-specific-names-only></use-specific-names-only>
</props>
```
the mapmaker will use a fallback mechanism (first the default name - `name`, then international and then the short name). This is a legacy feature and is probably not very useful, so it should be obsoleted in the future.

### Transliterations

#### Non-English characters to English
Sometimes, a map covering the English-speaking country (probably erroneously) shows a placename with non-English character (like San José in California). To convert these characters to English alphabet, use `nonenglish-to-english` custom property:
```xml 
<props>
  <nonenglish-to-english>True</nonenglish-to-english>
</props>
```

#### Cyrillic to Latin
By default, Cyrillic script is not transliterated into Latin. To enable this transliteration, add `cyrillic_to_latin` custom property with a value specifying the Cyrillics culture ID:
```xml 
<props>
  <cyrillic-to-latin>sr</cyrillic-to-latin>
</props>
```
Currently, transliteration into two Cyrillic cultures are supported:
1. `bel` : Belarusian (using [BGN/PCGN romanization of Belarusian](https://en.wikipedia.org/wiki/BGN/PCGN_romanization_of_Belarusian))
2. `sr`: Serbian

## Text

### Showing Cyrillic labels
The default font CantoraOne used on gmap style for neighborhoods and suburbs does not support Cyrillic characters, so maps that show Cyrillic labels should switch to using a different font (like Cuprum) by setting the `suburb-neighborhood-font` custom property:
```xml 
<props>
  <suburb-neighborhood-font>Cuprum</suburb-neighborhood-font>
</props>
```


### Labels are too far from symbols
![](/azurite/img/labels-too-far-from-symbols.png?raw=true)

This can happen when **superfast** level of detail is used, since in that mode the placement algorithm chooses 
the initial label placement as the final one.

### Illustrator reports "Certain alternate glyphs are not available in this version of Illustrator"
This happens if some characters in the SVG text cannot be rendered by the font used. I had this problem with Roman numerals (entered as their special Unicode characters), for which I had to implement `RomanNumeralsTransliterator`.

Too see what characters are used in the document, run `TtfFileReadingTests.DocumentCharacterAnalysis` test case.
