# Azurite Mapmaking Knowledgebase

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
## Sea Topology
### Troubleshooting
There are several mechanisms for troubleshooting problems with sea topology:
1. using `coastline` map theme to just work on coastline.
1. using the debug mode when rendering, which renders the tiles grid, tile IDs and tile types.
1. `SeaTileGenerator.GenerateNonEmptyTile()` method contains (commented) catch block that catches exceptions that happen when there is an error in clipping coastline polylines for a given tile. The code produces GeoJSON output for that tile which can be analyzed in a [GeoJSON viewer](http://geojson.io).
1. `SeaTopologyResolver.ResolveLevel()` method catches exceptions and renders the topology into a `seatopo.png` bitmap file.
1. `SeaTopologyGenerator.GenerateSeaTopology()` method contains an empty catch block that just rethrows the exception. If the `throw;` is commented, the sea topology is still rendered (albeit in an incomplete way). 
1. [OSM Inspector/Views/Coastline](http://tools.geofabrik.de/osmi/?view=coastline) tool for checking if there are any errors in the OSM coastline data.

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
