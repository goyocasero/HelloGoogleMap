function createPOI(latitude, longitude, poiTitle, poiSnippet, poiDescription) {
  var poi = {};
  poi.id = 1;
  poi.markerId = 2;
  poi.lat = latitude;
  poi.lng = longitude;
  poi.title = poiTitle;
  poi.snippet = poiSnippet;
  poi.description = poiDescription;
  return poi;
}
