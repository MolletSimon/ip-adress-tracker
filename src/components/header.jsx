import { useState } from 'react';
import AddressInfos from './addressinfos';
import AddressInput from './addressinput';

function Header({infos, setInfos}) {
    return(
        <header className="bg-[url('images/pattern-bg.png')] bg-cover h-[250px]">
            <h1 className="text-3xl font-rubik pt-8 text-white">IP Adress Tracker</h1>
            <AddressInput setInfos={setInfos}></AddressInput>
            <AddressInfos infos={infos}></AddressInfos>
        </header>
    )
}

export default Header;