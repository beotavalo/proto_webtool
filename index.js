var mapa = L.map("contenedor-del-mapa").setView([-1.8, -78], 6.5) 

var osm  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?', {
    minZoom: 6,
    maxZoom: 8,
    attribution: '© OpenStreetMap'
}).addTo(mapa);

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    minZoom: 6,
    maxZoom: 8,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

// Insertando una leyenda en el mapa
var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (mapa) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = `<svg height="100" width="120">
    <!-- Color de fondo -->
    <rect width="100%" height="100%" fill="#f0f0f0"></rect>
    <text x="10" y="10" style="font-family: sans-serif; font-size: 12px;">LEYENDA</text>
    <rect x="10" y="20" height="12" width="12" style="stroke-width: 4; stroke: #0000; fill: #20bf6b; fill-opacity: 0.5;"></rect>
    <text x="25" y="30" style="font-family: sans-serif; font-size: 12px;">Alta prioridad</text>
    <rect x="10" y="40" height="12" width="12" style="stroke-width: 4; stroke: #0000; fill: #45aaf2; fill-opacity: 0.5;"></rect>
    <text x="25" y="50" style="font-family: sans-serif; font-size: 12px;">Prioridad SE</text>
    <rect x="10" y="60" height="12" width="12" style="stroke-width: 4; stroke: #0000; fill: #a55eea; fill-opacity: 0.5;"></rect>
    <text x="25" y="70" style="font-family: sans-serif; font-size: 12px;">Prioridad FE</text>
    <rect x="10" y="80" height="12" width="12" style="stroke-width: 4; stroke: #0000; fill: #fc5c65; fill-opacity: 0.5;"></rect>
    <text x="25" y="90" style="font-family: sans-serif; font-size: 12px;">Menor prioridad</text>
    </svg>`;
    return div;
};

legend.addTo(mapa);




