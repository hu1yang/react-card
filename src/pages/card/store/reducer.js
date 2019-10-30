import * as constants from './constants'
import { fromJS }from 'immutable'

const defaultState = fromJS({
    cout:4,
    coutPage:0
})

export default ( state = defaultState , action) => {

    switch (action.type) {
        case constants.CHANGE_EVENTS:
            return state.set('coutPage',action.num)

        default:
            return state;
    }
}