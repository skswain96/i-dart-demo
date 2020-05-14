import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { Paper } from "@material-ui/core";

import { connect } from "react-redux";

import classes from "../../styles/PortfolioChart.module.scss";

const PortfolioChart = ({ data, chartData }) => {
  const [chartdata, setChartdata] = useState([]);
  const mfCell = Math.abs(parseFloat(chartData.mfPercent)).toFixed(2);
  const etfCell = Math.abs(parseFloat(chartData.etfPercent)).toFixed(2);
  useEffect(() => {
    if (chartData) {
      let reqChartData = [
        {
          name: "Mutual Funds",
          value: parseFloat(mfCell), //Math.abs(parseFloat(chartData.mfPercent)).toFixed(2)
          color: "#03a9f4",
        },
        {
          name: "ETFs",
          value: parseFloat(etfCell),
          color: "#ae9c46",
        },
      ];
      setChartdata(reqChartData);
    }
  }, [chartData]);

  return (
    <Paper elevate={6} className={classes.portfolioChart}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 14px",
        }}
      >
        <div className={classes.header}>Portfolio</div>
        <select className={classes.select}>
          <option>Asset Wise</option>
        </select>
      </div>
      <PieChart width={310} height={200}>
        <Pie
          data={chartdata}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
        >
          {chartdata.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
        <Legend
          align="right"
          layout="vertical"
          verticalAlign="middle"
          height={24}
        />
        <Tooltip />
      </PieChart>
    </Paper>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.root.data,
    chartData: state.root.chartData,
  };
};

export default connect(mapStateToProps)(PortfolioChart);
