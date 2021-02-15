import React from "react"
import { Table } from "react-bootstrap"
import s from './Users.module.css'

const calcheight = () => {
    return (document.documentElement.clientHeight * 73 / 100)
}
const Users = (props) => {
    
    return (
        <div className={s.wrapper} style={{ height: calcheight() }}>
            <Table striped={false} bordered size="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>sex</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(u => {
                        return (
                            <tr>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.phone}</td>
                                <td>{u.sex}</td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </div>
    )
}


export default Users