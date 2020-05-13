import { data } from '../../dump/data'

export const SET_ALL_DATA = 'SET_ALL_DATA'
export const UPDATE_DATA = 'UPDATE_DATA'
export const GET_SCRIP = 'GET_SCRIP'

const setUpData = data => {
    return {
        type: SET_ALL_DATA,
        data
    }
}

const setNewdata = newData => {
    return {
        type: UPDATE_DATA,
        newData
    }
}
const getScrip = scrip => {
    return {
        type: GET_SCRIP,
        scrip
    }
}

export const getAllData = () => dispatch => {
    dispatch(setUpData(data))
}

export const updateData = newData => dispatch => {
    dispatch(setNewdata(newData))
}

export const getScripData = scrip => dispatch => {
    dispatch(getScrip(scrip))
}