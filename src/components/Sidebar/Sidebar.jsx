import React from "react"
import { NavLink } from "react-router-dom"
import s from "./Sidebar.module.css"
import logo from "./../../source/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartBar, faFileAlt } from "@fortawesome/free-solid-svg-icons"

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="" /><span>salam</span>
            </div>

            <div className={s.content}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/dashboard'>
                                <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
                                <span>Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/users'>
                                <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                                <span>Users</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={s.footer}>
                    <span>preferences</span>
                </div>
            </div>

        </div>
    )
}

export default Sidebar