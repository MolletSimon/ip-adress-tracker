function Header() {
    return(
        <header className="bg-[url('images/pattern-bg.png')] bg-cover h-[250px]">
            <h1 className="text-3xl font-rubik pt-8 text-white">IP Adress Tracker</h1>
            <div className="flex justify-center">
                <input type="text" name="ip" className="font-rubik mt-6 w-1/3 h-14 p-3 rounded-2xl" />
                <div className="bg-lightDark mt-6 h-14 w-14 rounded-r-2xl ml-[-2.5rem] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
                </div>
            </div>
            <div className="flex justify-center mt-8 z-[500] shadow-lg">
            <div className="w-3/4 h-32 bg-white rounded-2xl">
                    
            </div>
            </div>

        </header>
    )
}

export default Header;