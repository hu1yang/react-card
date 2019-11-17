import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'


const changecard = (result) => ({
    type: constants.GET_CARDS,
    cards: fromJS(result.data)
})


export const changeEvents = (num) => ({
    type: constants.CHANGE_EVENTS,
    num
})
export const getCards = () => {
    return (dispatch) => {
        axios.get('http://localhost:3333/getList').then((res) => {
            console.log(res.data.data)
            const result = res.data
            dispatch(changecard(result))
        })
        
    }
}
export const handclickF = () => ({
    type: constants.CHANGE_HANDCLICKF,
})
export const handclickT = () => ({
    type: constants.CHANGE_HANDCLICKT,
})
export const handclickTT = () => ({
    type: constants.CHANGE_HANDCLICKTT,
})