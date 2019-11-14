import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import {actionCreators} from '../store';
import { Cardlist , CardlistUl , CardlistLi , Cardall , CardBack , Cardclick , CardBackH2 ,
CardBackLocation , CardMap , CardHead , CardBody , CardStar } from '../style'
import backmap from '../../../static/img/map.png';



class Ftransformation extends PureComponent {
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
    changeEventsS = (e) => {
        this.setState({
            firstX :e.targetTouches[0].clientX,
            firstY :e.targetTouches[0].clientY,
        })
        // console.log(e.targetTouches[0].clientX,'初始')
        
    }
    changeEventsE = (e) => {
        this.setState({
            endX: e.changedTouches[0].clientX,
            endY: e.changedTouches[0].clientY,
        },() => {
            let moveX = this.state.endX - this.state.firstX;
            let moveY = this.state.endY - this.state.firstY;
            const { cout , coutPage , showcard} = this.props;
            // console.log(this.state.endX , this.state.firstX)
            if(Math.abs(moveX)>Math.abs(moveY)  && moveX>130){
                // console.log(Math.abs(moveX),Math.abs(moveY),moveX,'向右移')
                if(coutPage > (0) && coutPage < (cout)){
                    showcard(coutPage-1)
                }
            }else if(Math.abs(moveX)>Math.abs(moveY) && moveX<-130){
                // console.log(Math.abs(moveX),Math.abs(moveY),moveX,'向左移')
                if(coutPage >= (0) && coutPage < (cout-1)){
                    showcard(coutPage+1)
                }
            }
        });
        
    }
    render() {
        const { coutPage , Firstfloor , cards , handclick , handclickT , Secondfloor} = this.props
        return (
            <Cardlist className={Secondfloor ? 'card-list__selected' : ''} onTouchStart={this.changeEventsS.bind(this)} onTouchEnd={this.changeEventsE.bind(this)}>
                <CardlistUl style={{width:'400%'}} id='showul'>
                    {
                        cards.map((item,index) => (
                            <CardlistLi style={{transform:'translate3d(-'+ coutPage +'00%, 0px, 0px)'}} key={index}>
                                <Cardall className={Secondfloor ? 'card__selected' : ''}>
                                    <CardBack 
                                    className={(Firstfloor && index === coutPage) ? 'card_back active' :'card_back'} 
                                    style={{backgroundSize: '100% 100%' ,backgroundImage: 'url('+ item.get('backimg') +')' }} 
                                    onTouchEnd={() => handclick(Firstfloor , index , coutPage)}
                                    >
                                        <CardBackH2>{item.get('title')}</CardBackH2>
                                        <CardBackLocation>
                                            <span>{item.get('date')}</span>
                                            <span><i className='iconfont'>&#xe637;</i></span>
                                            <span>{item.get('address')}</span>
                                        </CardBackLocation>
                                    </CardBack>
                                    <Cardclick onTouchEnd={() => handclickT()} className={(Firstfloor && index === coutPage) ? 'actives' :'live'}>
                                        <CardMap style={{backgroundSize: 'cover' ,backgroundImage: 'url('+ backmap +')'}}></CardMap>
                                        <CardHead>
                                            <p>{item.get('idea')}</p>
                                            <p>{item.get('number')}</p>
                                            <CardStar>
                                                <i className='iconfont'>&#xe617;</i>
                                                <i className='iconfont'>&#xe617;</i>
                                                <i className='iconfont'>&#xe617;</i>
                                                <i className='iconfont'>&#xe617;</i>
                                                <i className='iconfont'>&#xe617;</i>
                                            </CardStar>
                                        </CardHead>
                                        <CardBody></CardBody>
                                    </Cardclick>
                                </Cardall>
                            </CardlistLi>
                        ))
                    }

                </CardlistUl>
            </Cardlist>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        cards: state.getIn(['card','cards']),
        cout: state.getIn(['card','cout']),
        coutPage: state.getIn(['card','coutPage']),
        Firstfloor: state.getIn(['card','Firstfloor']),
        Secondfloor: state.getIn(['card','Secondfloor'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showcard(num){
            dispatch(actionCreators.changeEvents(num))
            // console.log(num)
        },
        handclick(Firstfloor , index , coutPage){
            if(index === coutPage){
                if(Firstfloor){
                    dispatch(actionCreators.handclickF())
                    return false;
                }
                dispatch(actionCreators.handclickT())
            }
        },
        handclickT(){
            dispatch(actionCreators.handclickTT())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ftransformation)
