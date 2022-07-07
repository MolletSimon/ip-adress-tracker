import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function Map() {
    return(
        <div className='-z-10'>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className='h-[650px]'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://mts1.google.com/vt/lyrs=m@186112443&hl=x-local&src=app&x={x}&y={y}&z={z}"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
export default Map;