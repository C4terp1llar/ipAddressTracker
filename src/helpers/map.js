import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import mIcon from '../../images/marker.png'

const map = L.map('map', {
    center: [51.507351, -0.127696],
    zoom: 15,
});
const layout = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a href="https://github.com/C4terp1llar/ipAddressTracker.git">Git</a>',
});
const markerIcon = L.icon({
    iconUrl: mIcon,
});
const myMarker = L.marker([51.507351, -0.127696], {draggable: false, icon: markerIcon});

function initMap (){
    myMarker.addTo(map);
    layout.addTo(map);
}
function changeMap (lat, lng){
    map.setView([lat, lng]);
    myMarker.setLatLng([lat, lng]);
}

export const mapFuncs ={
    initMap,
    changeMap
}



