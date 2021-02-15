import React, { useState } from "react"
import styles from "./../Dashboard.module.css"
import Dropdown from "./Dropdown/Dropdown";
import Graphic from "./Graphic/Graphic";
import Legend from "./Legend/Legend";
import s from "./MainGraphic.module.css"
import classNames from "classnames/bind"

const MainGraphic = (props) => {
    const [expandMode, setExpandMode] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const show = () => {
        expandMode ? setExpandMode(false) : setExpandMode(true)
        setClickCount(1)
    }
    const calcheight = () => {
        return (document.documentElement.clientHeight * 32 / 100)
    } 
    const cx = classNames.bind(styles)
    const className= cx({
        largeDashboardWrapperFirst: expandMode,
        dashboardWrapper :!expandMode,
        // largeDashboardWrapperFirstReverse: !expandMode&&clickCount>0

    })
    return (
        <div style={{ height: calcheight(), padding: 0 }} className={className}>
            <div className={styles.dashboard + " " + s.wrapper}>
                <div className={styles.mainGraphicContent}>
                    <Dropdown graphicScale={props.graphicScale} graphicData={props.graphicData} setScale={props.setScale}/>
                    <div onClick={() => { show() }}>
                        <Legend graphicData={props.graphicData}/>
                    </div>
                </div>
                <div onClick={() => { show() }}>
                    <Graphic 
                        graphicScale ={props.graphicScale} 
                        graphicData={props.graphicData} 
                        expandMode={expandMode} />
                </div>
            </div>
        </div>
    )
}




// const putStyle= ()=>{
        
//     if (!expandMode && clickCount>0) return {...styles.dashboardWrapper,...styles.largeDashboardWrapperFirst,...styles.reverseAnim} 
//      else return  styles.largeDashboardWrapperFirst
//  }
export default MainGraphic


