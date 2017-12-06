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

## Toponyms
### Using default toponym names instead of international ones
By default, international toponym names are used (if they exist). To make a map using the default (local) names, add `use-default-names-only` custom property:
```xml 
<props>
  <use-default-names-only>True</use-default-names-only>
</props>
```

### Transliterations
#### Cyrillic to Latin
By default, Cyrillic script is not transliterated into Latin. To enable this transliteration, add `cyrillic_to_latin` custom property:
```xml 
<props>
  <cyrillic_to_latin>True</cyrillic_to_latin>
</props>
```

## Text
### Labels are too far from symbols
![](/azurite/img/labels-too-far-from-symbols.png?raw=true)

This can happen when **superfast** level of detail is used, since in that mode the placement algorithm chooses 
the initial label placement as the final one.

### Illustrator reports "Certain alternate glyphs are not available in this version of Illustrator"
This happens if some characters in the SVG text cannot be rendered by the font used. I had this problem with Roman numerals (entered as their special Unicode characters), for which I had to implement `RomanNumeralsTransliterator`.

Too see what characters are used in the document, run `TtfFileReadingTests.DocumentCharacterAnalysis` test case.
