console.log("working");

// create map object with a center and zoom level
let map = L.map("mapid").setView([34.0522, -118.2437], 14);

// tile layer for map background
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// add "graymap" tile layer to map
streets.addTo(map);

// add map marker for Los Angeles, California
L.circle([34.0522, -118.2437], {
    radius:300,
    color: "#000000",
    fillColor: "#FFFFE0"
}).addTo(map);
