import { useRef } from "react";
import { useMap } from "react-leaflet";

function AddressInput({setInfos}) {
    const input = useRef(null);
    const apiKey = "at_06VrI1Zcb04CD1MmLM5Bz7YzlPUYn";
    const onClick = () => {
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${input.current.value}`)
        .then(res => res.json())
        .then(
            (result) => {
                if (result.code) {
                    //error
                    alert(result.messages)
                } else {
                    setInfos(result);
                }
            },
            (error) => {console.log(error)}
            )
    }

    return(            
    <div className="flex justify-center">
    <input type="text" placeholder="Exemple: 192.168.1.24" ref={input} name="ip" 
    className="font-rubik mt-6 w-1/3 h-14 p-3 rounded-2xl placeholder:italic" />
    <div onClick={onClick} className="bg-lightDark mt-6 h-14 w-14 rounded-r-2xl ml-[-3.5rem] flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
    </div>
</div>)
}

export default AddressInput;