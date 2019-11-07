import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'


const changecard = (result) => ({
    type: constants.GET_CARDS,
    cards: fromJS(result.card)
})


export const changeEvents = (num) => ({
    type: constants.CHANGE_EVENTS,
    num
})
export const getCards = () => {
    return (dispatch) => {
        axios.get('/api/card.json').then((res) => {
            const result = res.data.data
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