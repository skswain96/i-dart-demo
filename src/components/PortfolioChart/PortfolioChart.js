import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts'
import { Paper } from '@material-ui/core';

import { connect } from 'react-redux'

import classes from '../../styles/PortfolioChart.module.scss'

const data02 = [
    {
        "name": "ETFs",
        "value": 4567,
        "color": "#03a9f4"
    },
    {
        "name": "Mutual Funds",
        "value": 2400,
        "color": "#009688"
    }
];


const PortfolioChart = ({ data, chartData }) => {

    const [chartdata, setChartdata] = useState([])

    useEffect(() => {
        if (chartData) {
            let reqChartData = [
                {
                    name: 'Mutual Funds',
                    value: parseFloat(chartData.mfPercent),
                    color: "#009688"
                },
                {
                    name: "ETFs",
                    value: parseFloat(chartData.etfPercent),
                    color: "#03a9f4"
                },

            ]
            setChartdata(reqChartData)
        }
    }, [chartData])

    return (
        <Paper elevate={6} className={classes.portfolioChart}>
            <div className={classes.header} >Portfolio</div>
            <PieChart width={300} height={300} >
                <Legend align="right" verticalAlign="top" height={36} />
                <Pie
                    data={chartdata}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#82ca9d" >
                    {
                        data02.map((entry, index) => <Cell key={index} fill={entry.color} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        </Paper>
    )
}
const mapStateToProps = state => {
    return {
        data: state.root.data,
        chartData: state.root.chartData
    }
}

export default connect(mapStateToProps)(PortfolioChart)