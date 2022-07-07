import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import MapInfos from './mapinfos';

function Map({infos}) {
    const center = [51.505, -0.09]

    return(
        <div className='z-0'>
            <MapContainer center={center} zoom={13} scrollWheelZoom={false} className='h-[650px]'>
                <MapInfos infos={infos}></MapInfos>
            </MapContainer>
        </div>
    )
}
export default Map;