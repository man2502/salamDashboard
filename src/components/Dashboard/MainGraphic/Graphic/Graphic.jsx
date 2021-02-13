import React, { PureComponent } from "react"
import s from "./Graphic.module.css"
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';



const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];
export default class Graphic extends PureComponent {
    calcheight (h){
        return( document.documentElement.clientHeight*h/100)
         
    }
    
    render() {
        debugger
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






