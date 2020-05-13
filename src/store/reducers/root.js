import {
    SET_ALL_DATA,
    UPDATE_DATA,
    GET_SCRIP
} from '../actions/index'

const initialState = {
    data: [],
    currentScrip: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_DATA:
            return {
                ...state,
                data: [...action.data]
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
