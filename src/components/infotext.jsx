function Infotext({title, value}) {
    return(
    <div className="flex items-start flex-col ml-4 mt-6 p-1">
        <h3 className="text-darkGray font-rubik text-xs tracking-wider">{title}</h3>
        <h2 className="text-left text-2xl font-medium font-rubik mt-1">{value ? value : '...'}</h2>
    </div>)
}
export default Infotext;