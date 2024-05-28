import React, { useState } from 'react'
import LightButton from "../../assets/website/light-mode-button.png";
import DarktButton from "../../assets/website/dark-mode-button.png";


const DarkMode = () => {

    const [theme, setTheme] = useState("dark")

    return (
        <div className='relative'>
            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} src={LightButton}
                alt="" className={`w-12 cursor-pointer absolute right-0 z-10
        ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
            />
            <img
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} src={LightButton} src={DarktButton}
                alt="" className={`w-12 cursor-pointer
        `}
            />

        </div>
    )
}

export default DarkMode