import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import { useEffect } from 'react';

function MapInfos({infos}) {
    const map = useMap()
    let location = null;

    useEffect(() => {
        location = infos ? infos.location ? infos.location : null : null
        if(location) map.flyTo([location.lat, location.lng])
    }, [infos]);

    const iconPerson = new L.Icon({
        iconUrl: require('../images/icon-location.svg'),
        iconRetinaUrl: require('../images/icon-location.svg'),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(60, 75),
        className: 'leaflet-div-icon'
    });

    return(
    <>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://mts1.google.com/vt/lyrs=m@186112443&hl=x-local&src=app&x={x}&y={y}&z={z}"
        />
        {location ? <Marker position={[location.lat, location.lng]} icon={iconPerson}></Marker> : <></>}
    </>
    )
}

export default MapInfos;