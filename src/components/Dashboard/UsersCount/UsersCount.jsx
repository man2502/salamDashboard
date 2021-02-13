import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import styles from "../Dashboard.module.css"
import s from "./UsersCount.module.css"
import {config, Spring} from 'react-spring/renderprops'


const UsersCount = (props) => {

    const [expandMode, setExpandMode] = useState(false);
    const show = () => {
        expandMode ? setExpandMode(false) : setExpandMode(true)
    }
    const calcheight = () => {
        return (document.documentElement.clientHeight * 20 / 100)
    }
    return (
        <div onClick={() => { show() }} style={{ height: calcheight() }} className={expandMode ? styles.largeDashboardWrapperSecond : styles.dashboardWrapper}>
            <div className={styles.dashboard}>
                <div className={s.content}>
                    <Row>
                        <Col lg={1} md={1}>
                            <span className={s.title + ' ' + "titleSmall"}>Users</span>
                        </Col>
                        <Col lg={11} md={11}>
                            <div>
                                <Spring
                                    config ={{duration: 1000}}
                                    from={{ number: 0 }}
                                    to={{ number: 15658 }}>
                                    {anim => <h1>{anim.number.toFixed()}</h1>}
                                </Spring>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}


export default UsersCount