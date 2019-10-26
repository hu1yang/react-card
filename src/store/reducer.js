import { combineReducers } from 'redux-immutable'
import { reducer as cardReducer } from '../pages/card/store'


const reducer = combineReducers({
    card: cardReducer,
})
export default reducer