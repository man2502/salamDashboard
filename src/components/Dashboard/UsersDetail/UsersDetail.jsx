import React, { useState } from "react"
import { Row, Col } from "react-bootstrap";
import styles from "./../Dashboard.module.css"
import s from "./UsersDetail.module.css"

const UsersDetail = (props) => {
    const [expandMode, setExpandMode] = useState(false);
    const show = () => {
        expandMode ? setExpandMode(false) : setExpandMode(true)
    }

    const getDate = () => {

        let newDate = new Date()
        let date = newDate.getDate()
        let month = newDate.getMonth()
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let currentMonth = months[month + 1]
        return {
            currentMonth,
            date
        }
    }

    const dashboardInfo = [
        { id: 0, fullName: "Users Summary", name: "Overall", color: "#F25DE3", description: "total quantity for range" },
        { id: 1, fullName: "Online Now", name: "Online", color: "#FF9E01", description: "maximum online for range" },
        { id: 2, fullName: "New Users", name: "New", color: "#27FFD8", description: "new registered users for range" }
    ]
    const calcheight = ()=>{
        return(document.documentElement.clientHeight*16/100)
    }
    return (
        <div onClick={() => { show() }} style={{ height:  calcheight()}} className={expandMode ? styles.largeDashboardWrapperThird : styles.dashboardWrapper}>{/**/}
            <div className={styles.dashboard + " " + s.content}>
                <Row >
                    <Col lg={3} md={3}>
                        <Row>
                            <Col>
                                <div style={{ textAlign: "center" }}>
                                    <div className={s.mainTitle}>{getDate().date}</div>
                                    <div style={{letterSpacing: "1px",textTransform:"uppercase"}} className="titleSmall">{getDate().currentMonth}</div>
                                </div>
                            </Col>
                            <Col>
                                circle
                            </Col>
                        </Row>

                    </Col>
                    <Col lg={9} md={9}>
                        <Row>
                            {dashboardInfo.map(p => {
                                return (
                                    <Col lg={4} md={4} className={s.infoItem}>
                                        <div className={s.infoItemWrapper}>
                                            <div className={s.mainTitle}>51515151</div>
                                            <div className={s.secondaryTitle + " "+ "titleSmall"}>{p.fullName}</div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default UsersDetail