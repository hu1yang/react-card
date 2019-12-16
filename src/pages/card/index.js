import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CardBox , CardTop , CardTops , CardMenu , CardMenuL } from './style';
import {actionCreators} from './store';
import Ftransformation from './components/Ftransformation'
// import Fullscreen from './components/Fullscreen'



class Card extends PureComponent {

    render() {
        return (
            <CardBox>
                <CardTop>
                    <CardTops><i className='iconfont'>&#xe601;</i></CardTops>
                    <CardTops>Card map</CardTops>
                    <CardTops><i className='iconfont'>&#xe637;</i></CardTops>
                </CardTop>
                <CardMenu>
                    <CardMenuL>Animal</CardMenuL>
                    <CardMenuL className='active'>Scenery</CardMenuL>
                    <CardMenuL>Delicious</CardMenuL>
                </CardMenu >
                <Ftransformation />
                {/* <Fullscreen /> */}
            </CardBox>
        )
    }
    componentWillMount() {
        this.props.getCard()
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getCard() {
            dispatch(actionCreators.getCards())
        },
    }
}
export default connect(null,mapDispatchToProps)(Card)