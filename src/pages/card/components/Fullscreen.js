import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import {actionCreators} from '../store'
import { Fulldetail , Fullheight , Fullfornt , Fullback , CardBackH2 , CardBackLocation ,
     Fullmap , Fullhead , Fullbody , CardStar} from '../style'
import map from '../../../static/img/map.png'
import face1 from '../../../static/img/face1.jpg'
import face2 from '../../../static/img/face2.jpg'


class Fullscreen extends PureComponent {

    getcard(){
        const {servers , cards , coutPage} = this.props;
        
        const cardsto = cards.toJS();
        const card = cardsto[coutPage];
        if(!card){
            return false;
        }
        return (
            <Fullheight className="card__active">
                <Fullfornt  className="card_front" style={{backgroundSize: '100%' ,backgroundImage: 'url('+servers+'/upload/'+ card.backimg +')' ,backgroundRepeat: 'no-repeat'}} >
                    <CardBackH2>{card.title}</CardBackH2>
                    <CardBackLocation className="card_menu">
                        <span>{card.date}</span>
                        <span><i className='iconfont'>&#xe637;</i></span>
                        <span>{card.address}</span>
                    </CardBackLocation>
                </Fullfornt>
                <Fullback className="card_back">
                    <Fullmap className="card_map" style={{backgroundImage: 'url('+map+')',backgroundSize: 'cover',height: '100px'}}></Fullmap>
                    <Fullhead className="card_head">
                        <p className="card_address">La Crescenta-Montrose, CA91020 Glendale</p>
                        <p className="card_address">NO. 7911847</p>
                        <CardStar>
                            <i className='iconfont'>&#xe617;</i>
                            <i className='iconfont'>&#xe617;</i>
                            <i className='iconfont'>&#xe617;</i>
                            <i className='iconfont'>&#xe617;</i>
                            <i className='iconfont'>&#xe617;</i>
                        </CardStar>
                    </Fullhead>
                    <Fullbody>
                        <div className="abstract"></div>
                        <div className="post-list">
                            <div className="post">
                                <div className="post_avatar">
                                    <span className="post_face" style={{backgroundImage: 'url('+ face1 +')'}}></span>
                                    <span className="post_name">Amada Lin</span>
                                    <span className="post_date">Dec 07</span>
                                </div>
                                <p className="post_content">The federal beach atc requires states that receive funding to develop a risk-based beach evaluation and classification plan and apply it to</p>
                            </div>
                            <div className="post">
                                <div className="post_avatar">
                                    <span className="post_face" style={{backgroundImage: 'url('+ face2 +')'}}></span>
                                    <span className="post_name">Amada Lin</span>
                                    <span className="post_date">Dec 07</span>
                                </div>
                                <p className="post_content">The federal beach atc requires states that receive funding to develop a risk-based beach evaluation and classification plan and apply it to</p>
                            </div>
                        </div>
                    </Fullbody>
                </Fullback>
            </Fullheight>
        )
    }
    render() {
        return(
            <Fulldetail className="card-detail">
                {this.getcard()}
            </Fulldetail>
        )

    }

} 

const mapStateToProps = (state) => {
    return {
        servers: state.getIn(['card','servers']),
        cards: state.getIn(['card','cards']),
        coutPage: state.getIn(['card','coutPage'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(Fullscreen)