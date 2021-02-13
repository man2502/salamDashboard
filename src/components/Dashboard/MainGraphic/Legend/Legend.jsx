import React from "react"
import { Col, Row } from "react-bootstrap"
import s from "./Legend.module.css"

const Legend = (props) => {
    return (
        <div className={s.wrapper}>
            <Row>
                {props.graphicData.map(i => {
                    return (
                        <Col>
                            <div className={s.item}>
                                <span className={s.circle} style={{backgroundColor:i.color}}></span>
                                <div className={s.titles + " " + "titleSmall"}>
                                    <div className={s.firstTitle} style={{color:i.color}}>{i.name}</div>
                                    <div className={s.description}>{i.description}</div>
                                </div>
                            </div>
                        </Col>
                    )
                })}


            </Row>
        </div>
    )
}


export default Legend