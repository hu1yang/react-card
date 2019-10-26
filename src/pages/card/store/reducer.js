import * as constants from './constants'
import { fromJS }from 'immutable'

const defaultState = fromJS({
    BannerImg:[
        {img:"http://niuip.cc/static/assets/img/banner/01.jpg",title:"牛郎"},
        {img:"http://niuip.cc/static/assets/img/banner/04.jpg",title:"牛郎"},
        {img:"http://niuip.cc/static/assets/img/banner/03.jpg",title:"牛郎"},
        {img:"http://niuip.cc/static/assets/img/banner/06.jpg",title:"牛郎"},
    ],
    BannerNumber: 1,
    Banerpage: 0,
    
})

export default ( state = defaultState , action) => {

    switch (action.type) {
        case constants.CHANGE_BANNERNUMBER:
            return state.set('BannerNumber',action.data);
        case constants.CHANGE_BANNERPAGE:
            return state.set('Banerpage', action.data);
        default:
            return state;
    }
}