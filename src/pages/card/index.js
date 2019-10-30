import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CardBox , CardTop , CardTops , CardMenu , CardMenuL , Cardlist 
, CardlistUl , CardlistLi , Cardall , CardBack , Cardclick} from './style';
import ReactDOM from 'react-dom'
import {actionCreators} from './store'
import backi1 from '../../static/img/03.jpg'
import backi2 from '../../static/img/06.jpg'
import backi3 from '../../static/img/04.jpg'
import backi4 from '../../static/img/05.jpg'
import backmap from '../../static/img/map.png'
import face1 from '../../static/img/face1.jpg'
import face2 from '../../static/img/face2.jpg'




class Card extends PureComponent {
    
    constructor(props){
        super(props);
        this.state={
            firstX:0,
            firstY : 0,
            endX :0,
            endY :0,
            moveX :0,
            moveY:0,
        }
    }
    changeEventsF = (e) => {
        this.setState({
            firstX :e.targetTouches[0].clientX,
            firstY :e.targetTouches[0].clientY,
        })
    }
    changeEventsE = (e) => {
        this.setState({
            endX: e.changedTouches[0].clientX,
            endY: e.changedTouches[0].clientY,
        });
        let moveX = this.state.endX - this.state.firstX;
        let moveY = this.state.endY - this.state.firstY;
        const { cout , coutPage , showcard} = this.props
        //左滑
        // console.log(coutPage , cout)
        if(Math.abs(moveX)>Math.abs(moveY)  && moveX>0){
            console.log('向左滑'+ moveX)
            if(coutPage > (0) && coutPage < (cout)){
                showcard(coutPage-1)
            }
        }else if(Math.abs(moveX)>Math.abs(moveY) && moveX<0){
            console.log('向右滑'+ moveX)
            if(coutPage >= (0) && coutPage < (cout-1)){
                showcard(coutPage+1)
            }
        }
    }
    render() {
        const { cout , coutPage } = this.props
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
                </CardMenu>
                <Cardlist onTouchStart={this.changeEventsF.bind(this)} onTouchEnd={this.changeEventsE.bind(this)}>
                    <CardlistUl style={{width:'400%'}} id='showul'>
                        <CardlistLi style={{transform:'translate3d(-'+ coutPage +'00%, 0px, 0px)'}}>
                            <Cardall>
                                <CardBack className='card_back' style={{backgroundSize: '100% 100%' ,backgroundImage: 'url('+ backi1 +')' }}></CardBack>
                                <Cardclick></Cardclick>
                            </Cardall>
                        </CardlistLi>
                        <CardlistLi style={{transform:'translate3d(-'+ coutPage +'00%, 0px, 0px)'}}>
                            <Cardall>
                                <CardBack className='card_back' style={{backgroundSize: '100% 100%' ,backgroundImage: 'url('+ backi4 +')'}}></CardBack>
                                <Cardclick></Cardclick>
                            </Cardall>
                        </CardlistLi>
                        <CardlistLi style={{transform:'translate3d(-'+ coutPage +'00%, 0px, 0px)'}}>
                            <Cardall>
                                <CardBack className='card_back' style={{backgroundSize: '100% 100%' ,backgroundImage: 'url('+ backi2 +')'}}></CardBack>
                                <Cardclick></Cardclick>
                            </Cardall>
                        </CardlistLi>
                        <CardlistLi style={{transform:'translate3d(-'+ coutPage +'00%, 0px, 0px)'}}>
                            <Cardall>
                                <CardBack className='card_back' style={{backgroundSize: '100% 100%' ,backgroundImage: 'url('+ backi3 +')'}}></CardBack>
                                <Cardclick></Cardclick>
                            </Cardall>
                        </CardlistLi>
                    </CardlistUl>
                </Cardlist>
            </CardBox>
            
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        cout: state.getIn(['card','cout']),
        coutPage: state.getIn(['card','coutPage']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showcard(num){
            dispatch(actionCreators.changeEvents(num))
            // console.log(num)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Card)