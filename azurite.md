# Azurite Mapmaking Knowledgebase

## Text
### Labels are too far from symbols
![](/azurite/img/labels-too-far-from-symbols.png?raw=true)

This can happen when **superfast** level of detail is used, since in that mode the placement algorithm chooses 
the initial label placement as the final one.

### Illustrator reports "Certain alternate glyphs are not available in this version of Illustrator"
This happens if some characters in the SVG text cannot be rendered by the font used. I had this problem with Roman numerals (entered as their special Unicode characters), for which I had to implement `RomanNumeralsTransliterator`.

Too see what characters are used in the document, run `TtfFileReadingTests.DocumentCharacterAnalysis` test case.
