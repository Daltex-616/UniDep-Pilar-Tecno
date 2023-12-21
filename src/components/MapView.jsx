import React from "react";
import "leaflet/dist/leaflet.css";
import "../style.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";



const customIcon = new Icon({
  iconUrl:
    "https://toppng.com/uploads/preview/red-among-us-png-vector-download-11640991587fawrij7j5s.png",

  iconSize: [30, 30],
});
const marker = { latitud: -29.4261232, longitud: -66.8650808 };
const descripcion = { popUp: 'Descripción del marcador' };

const MapView = ({ marker, descripcion }) => {
        const { latitud, longitud } = marker;
        const geoloc = [latitud, longitud];
  

  return (
    <>
      <h4>ubicacion:</h4>
      <MapContainer center={[-29.4311863, -66.8701879]} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Verificar si geoloc existe antes de renderizar el Marker */}
        {geoloc && (
          <Marker position={geoloc} icon={customIcon}>
            <Popup>{descripcion.popUp}</Popup>
          </Marker>)}
      </MapContainer>
    </>
  );
};

export default MapView;
