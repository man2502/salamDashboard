import React, { PureComponent } from "react"
import s from "./Graphic.module.css"
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';




export default class Graphic extends PureComponent {
    calcheight (h){
        return( document.documentElement.clientHeight*h/100)
         
    }
    
    render() {
        
        const base = this.props.graphicData;
        const activeStyle= {
            transform: 'scale(0.96) translateX(-2%)',
        }
        return (
            <div style={this.props.expandMode? activeStyle:{}} className={s.wrapper}>
                <ResponsiveContainer width="100%" height={this.props.expandMode?this.calcheight(22): this.calcheight(14)}>
                    <LineChart
                        data={this.props.graphicScale.data}
                        margin={{
                            top: 5, right: 0, left: 0, bottom: 0,
                        }}
                    >
                        <XAxis hide={true} dataKey="name" />
                        <YAxis hide={true} />
                        <Tooltip isAnimationActive={false}  cursor={{ stroke: '#fff', strokeWidth: 1 }} contentStyle={{ background: "rgba(0, 140, 253,0.7)", fontWeight: "bold", borderRadius: "4px" }} />
                        {/* <Legend /> */}
                        <Line dot={false} dataKey="pv" stroke={base[0].color} strokeWidth={3} />
                        <Line dot={false} dataKey="uv" stroke={base[1].color} strokeWidth={3} />
                        <Line dot={false} dataKey="amt" stroke={base[2].color} strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        );
    }
}






