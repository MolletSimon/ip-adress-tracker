import Infotext from './infotext';

function AddressInfos({infos}) {
    const ipAddress = infos ? infos.ip: '';
    const location = infos ? infos.location ? `${infos.location.city} - ${infos.location.region}` : '' : ''
    const timezone = infos ? infos.location ? `UTC${infos.location.timezone}` : '' : ''
    const isp = infos ? infos.isp : ''

    return(            
    <div className="flex justify-center mt-10 z-[500] relative">
    <div className="w-3/5 h-32 bg-white rounded-2xl grid gap-4 grid-cols-4">
        <Infotext title="IP ADDRESS" value={ipAddress}></Infotext>
        <Infotext title="LOCATION" value={location}></Infotext>
        <Infotext title="TIMEZONE" value={timezone}></Infotext>
        <Infotext title="ISP" value={isp}></Infotext>
    </div>
</div>)
}

export default AddressInfos;