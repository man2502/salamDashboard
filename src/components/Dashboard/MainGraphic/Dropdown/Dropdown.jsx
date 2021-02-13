import React, { useState } from "react"
import s from "./Dropdown.module.css"

const Dropdown = (props) => {
    const [extraMenu, setExtraMenu] = useState(false)
    const show = () => {
        (extraMenu) ? setExtraMenu(false) : setExtraMenu(true)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.dropdownTitle+" " +"titleSmall"}>Statistics for last 
                <span onClick={()=>{show()}} className={s.dropdownToggle}>{props.graphicScale.name}</span>
            </div>
            
            <div style={extraMenu? {display: "block"}:{display:"none"}} className={s.dropdownMenu}>
                <div onClick={()=>{props.setScale(0); setExtraMenu(false)}} className={s.dropdownItem + " " + "titleSmall"}>Year</div>
                <div onClick={()=>{props.setScale(1); setExtraMenu(false)}} className={s.dropdownItem + " " + "titleSmall"}>Week</div>
            </div>
        </div>
    )
}

export default Dropdown