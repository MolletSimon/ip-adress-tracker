import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function Map({infos}) {
    const location = infos ? infos.location ? infos.location : null : null
    const center = location ? [location.lat, location.lng] : [51.505, -0.09]

    return(
        <div className='z-0'>
            <MapContainer center={center} zoom={13} scrollWheelZoom={false} className='h-[650px]'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://mts1.google.com/vt/lyrs=m@186112443&hl=x-local&src=app&x={x}&y={y}&z={z}"
                />
            </MapContainer>
        </div>
    )
}
export default Map;