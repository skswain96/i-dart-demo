/* eslint-disable array-callback-return */
import {
  SET_ALL_DATA,
  UPDATE_DATA,
  GET_SCRIP,
  SET_CHART_DATA,
} from "../actions/index";

const initialState = {
  data: null,
  currentScrip: {},
  chartData: null,
  refreshData: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_DATA:
      return {
        ...state,
        data: [...action.data],
      };

    case SET_CHART_DATA:
      let newChartData = {
        mfPercent: 0,
        etfPercent: 0,
      };
      // console.log('action dtaa', action.data)
      action.data.map((d) => {
        if (d.type === "MF") {
          // console.log(d.percent_portfolio_value)
          newChartData.mfPercent += d.percent_portfolio_value;
        }
        else if (d.type === "ETF")
          newChartData.etfPercent += d.percent_portfolio_value;
        else return;
      });

      // console.log('newchart dtaa', newChartData)
      newChartData.mfPercent = newChartData.mfPercent;
      newChartData.etfPercent = newChartData.etfPercent;
      return {
        ...state,
        chartData: newChartData,
      };
    case UPDATE_DATA:
      let totalData = [...state.data];
      let reqData = totalData.map((data) => {
        if (data.scrip === action.newData.scrip) {
          return { ...data, ...action.newData };
        } else return data;
      });
      return {
        ...state,
        data: reqData,
        refreshData: !state.refreshData
      };

    case GET_SCRIP:
      let totalDat = [...state.data];
      let reqScrip = totalDat.find((data) => data.scrip === action.scrip);
      return {
        ...state,
        currentScrip: reqScrip,
      };
    default:
      return state;
  }
};
