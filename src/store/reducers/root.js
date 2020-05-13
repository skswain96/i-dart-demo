import {
    SET_ALL_DATA,
    UPDATE_DATA,
    GET_SCRIP,
    SET_CHART_DATA
} from '../actions/index'

const initialState = {
    data: [],
    currentScrip: {},
    chartData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_DATA:
            return {
                ...state,
                data: [...action.data]
            }

        case SET_CHART_DATA:
            let newChartData = {
                mfPercent: 0,
                etfPercent: 0
            }
            action.data.map(d => {
                if (d.type === 'MF') newChartData.mfPercent += d.percent_portfolio_value
                else if (d.type === 'ETF') newChartData.etfPercent += d.percent_portfolio_value
                else return
            })
            newChartData.mfPercent = newChartData.mfPercent.toFixed(2)
            newChartData.etfPercent = newChartData.etfPercent.toFixed(2)
            return {
                ...state,
                chartData: newChartData
            }
        case UPDATE_DATA:
            let totalData = [...state.data]
            let reqData = totalData.map(data => {
                if (data.scrip === action.newData.scrip) {
                    return action.newData
                } else return data
            })
            return {
                ...state,
                data: reqData

            }

        case GET_SCRIP:
            let totalDat = [...state.data]
            let reqScrip = totalDat.find(data => data.scrip === action.scrip)
            return {
                ...state,
                currentScrip: reqScrip
            }
        default:
            return state
    }
}
