var mapa = L.map("contenedor-del-mapa").setView([-1.8, -78], 6.5) //-78, -1.8, 6
//L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?", {}).addTo(mapa)

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 5,
	maxZoom: 8,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
}).addTo(mapa);

 

/*
var marcador = L.marker([-0.3, -78.49]).addTo(mapa)
//marcador.bindPopup("Ferrocarriles de Ecuador Longitud: 52 Km")

var popup = L.popup()
    .setLatLng([-0.3, -78.49])
    .setContent('<H3> P1: Metro labrador </h3> <h4> Longitud: 10 Km </h4> <h4> CAPEX: 100 M USD </h4> ')
    .addTo(mapa);


const circulo = L.circle([-1.2, -78.65], {
    radius: 1000,
    color: "green"
}).addTo(mapa)
circulo.bindPopup("Extensión Metro Labrador - La Ofelia Longitud: 4 Km")

function clicSobreMapa(evento) {
    alert("Diste clic en el punto con coordenadas latitud: " + evento.latlng.lat + " y longitud: " + evento.latlng.lng)
}

mapa.on("click", clicSobreMapa);

console.log(mapa)
console.log(marcador)
console.log(circulo)*/