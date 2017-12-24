var map = L.map("map", {
    center: [53.2, -1.7],
    zoom: 6
});

var lDarkMatter = L.tileLayer(
    "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png");
map.addLayer(lDarkMatter);

var sampleGeoJson = {
    "type": "FeatureCollection",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:EPSG::3857"
        }
    },
    "features": [{
        "type": "Feature",
        "properties": {

        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [[
                [-625570.6, 6465993.0],
                [-305006.9, 6696510.8],
                [-546330.2, 6768547.6],
                [-445478.6, 7053093.0],
                [-279794.0, 7056694.8],
                [-359034.5, 7337638.4],
                [-211359.0, 7485313.8],
                [62380.8,   6955843.3],
                [220861.7,  6909019.4],
                [91195.5,   6700112.6],
                [213658.1,  6682103.4],
                [-625570.6, 6465993.0]]]
        }
    }]
};

var dashedStyle = {
    weight: 2,
    opacity: 1,
    fillOpacity: 0,
    color: "white",
    dashArray: "3"
};

var layerGeoJson = L.Proj.geoJson().addTo(map);

function updateGeoJson(textAreaId) {
    var geoJsonStr = document.getElementById(textAreaId).value;
    layerGeoJson.clearLayers();
    addGeoJsonToLayer(geoJsonStr);
}

function addGeoJsonToLayer(geoJsonStr) {
    return eval("layerGeoJson.addData(" + geoJsonStr + ");");
}

updateGeoJson("geojson-text");