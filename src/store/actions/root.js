import { data } from "../../dump/data";

export const SET_ALL_DATA = "SET_ALL_DATA";
export const SET_CHART_DATA = "SET_CHART_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const GET_SCRIP = "GET_SCRIP";

const setUpData = (data) => {
  return {
    type: SET_ALL_DATA,
    data,
  };
};

const setUpChartData = (data) => {
  return {
    type: SET_CHART_DATA,
    data,
  };
};

const setNewdata = (newData) => {
  return {
    type: UPDATE_DATA,
    newData,
  };
};
const getScrip = (scrip) => {
  return {
    type: GET_SCRIP,
    scrip,
  };
};


const convertToFloat = num => {
  return parseFloat(num.toFixed(2))
}
const totalInvestedAmount = arr => {
  return arr.reduce((total, d) =>
    total + d.invested_amount
    , 0)
}

const findDynamicValues = arr => {
  return arr.map(d => {
    return {
      ...d,
      ['avg_cost']: d.invested_amount / d.quantity,
      ['market_value']: d.price * d.quantity,
      ['unrealized_PL']: convertToFloat((d.price * d.quantity) - d.invested_amount),
      ['return']: convertToFloat((((d.price * d.quantity) - d.invested_amount) * 100) / d.invested_amount),
      ['percent_portfolio_value']: convertToFloat((d.price * d.quantity / totalInvestedAmount(arr)) * 100)
    }
  })
}


export const getAllData = () => (dispatch) => {
  //calculate total invested_amount
  //set up dynamic data
  let reqdata = findDynamicValues(data)
  dispatch(setUpData(reqdata));
  dispatch(setUpChartData(reqdata));
};

export const updateData = (newData) => (dispatch) => {
  // dispatch(setNewdata(newData));
  // console.log('new data ', newData)
  let reqData = [...data];
  reqData = reqData.map((data) => {
    if (data.scrip === newData.scrip) {
      console.log({ ...data, ...newData })
      return { ...data, ...newData };
    } else return data;
  });
  reqData = findDynamicValues(reqData)
  // console.log(' neew Req Data', reqData)

  dispatch(setUpData(reqData))
  dispatch(setUpChartData(reqData))
};

export const getScripData = (scrip) => (dispatch) => {
  dispatch(getScrip(scrip));
};
