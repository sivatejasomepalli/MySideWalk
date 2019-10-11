import L from "leaflet";
import "./styles.css";

import json from "./kc-neighborhoods.json";

import json2 from "./kc-tracts.json";

const map = L.map("map").setView([51.505, -0.09], 2);

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox.streets"
  }
).addTo(map);

const onEachFeature = (feature, layer) => {
  // eslint-disable-line no-use-before-define
  const popupContent = `
  <table>
  <tr>
    <th>id:</th>
    <td>${feature.properties.id}</td>
  </tr>
  <tr>
    <th>shid:</th>
    <td>${feature.properties.shid}</td>
  </tr>
  <tr>
    <th>area:</th>
    <td>${feature.properties.area}</td>
  </tr>
  <tr>
    <th>pop-commute-drive_alone:</th>
    <td>${feature.properties["pop-commute-drive_alone"]}</td>
  </tr>
  <tr>
    <th>pop-commute-drive_carpool	:</th>
    <td>${feature.properties["pop-commute-drive_carpool"]}</td>
  </tr>
  <tr>
    <th>pop-commute-public_transit	:</th>
    <td>${feature.properties["pop-commute-public_transit"]}</td>
  </tr>
  <tr>
    <th>pop-commute-drive_alone:</th>
    <td>${feature.properties["pop-commute-walk"]}</td>
  </tr>
</table>`;

  if (feature.properties && feature.properties.popupContent) {
    popupContent += feature.properties.popupContent;
  }

  layer.bindPopup(popupContent);
};

const onEachFeature2 = (feature, layer) => {
  // eslint-disable-line no-use-before-define
  const popupContent = `
  <table>
  <tr>
    <th>id:</th>
    <td>${feature.properties.id}</td>
  </tr>
  <tr>
    <th>shid:</th>
    <td>${feature.properties.shid}</td>
  </tr>
  <tr>
    <th>area:</th>
    <td>${feature.properties.area}</td>
  </tr>
  <tr>
    <th>pop-commute-drive_alone:</th>
    <td>${feature.properties["pop-commute-drive_alone"]}</td>
  </tr>
  <tr>
    <th>pop-commute-drive_carpool	:</th>
    <td>${feature.properties["pop-commute-drive_carpool"]}</td>
  </tr>
  <tr>
    <th>pop-commute-public_transit	:</th>
    <td>${feature.properties["pop-commute-public_transit"]}</td>
  </tr>
  <tr>
    <th>pop-commute-drive_alone:</th>
    <td>${feature.properties["pop-commute-walk"]}</td>
  </tr>
</table>`;

  if (feature.properties && feature.properties.popupContent) {
    popupContent += feature.properties.popupContent;
  }

  layer.bindPopup(popupContent);
};

const feature = L.geoJSON(json, {
  onEachFeature: onEachFeature
}).addTo(map);

const feature2 = L.geoJSON(json2, {
  onEachFeature: onEachFeature2
}).addTo(map);

map.fitBounds(feature.getBounds());
map.fitBounds(feature2.getBounds());
