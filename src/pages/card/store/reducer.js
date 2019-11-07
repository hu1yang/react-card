import * as constants from './constants'
import { fromJS }from 'immutable'

const defaultState = fromJS({
    cards:[],
    cout:4,
    coutPage:0,
    Firstfloor:false
})

export default ( state = defaultState , action) => {

    switch (action.type) {
        case constants.CHANGE_EVENTS:
            return state.merge({
                coutPage: action.num,
                Firstfloor: false
            });
        case constants.GET_CARDS:
            return state.set('cards', action.cards)
        case constants.CHANGE_HANDCLICKF:
            return state.set('Firstfloor', false)
        case constants.CHANGE_HANDCLICKT:
            return state.set('Firstfloor', true)
        default:
            return state;
    }
}