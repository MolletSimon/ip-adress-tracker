import { useState } from 'react';
import AddressInfos from './addressinfos';
import AddressInput from './addressinput';
import ReactLoading from "react-loading";

function Header({infos, setInfos}) {
    const [isLoading, setIsLoading] = useState(false);
    return(
        <header className="bg-[url('images/pattern-bg.png')] bg-cover h-[250px]">
            {isLoading ? 
            <div className="flex justify-center items-center mt-10">
                <ReactLoading type="spin" color="#fff" /> 
            </div>
            : 
            <>
                <h1 className="text-3xl font-rubik pt-8 text-white">IP Adress Tracker</h1>
                <AddressInput setInfos={setInfos} setIsLoading={setIsLoading}></AddressInput>
                <AddressInfos infos={infos}></AddressInfos>
            </>
            }
        </header>
    )
}

export default Header;