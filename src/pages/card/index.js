import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CardBox , CardTop , CardTops , CardMenu , CardMenuL , CardSwiper , BackH2 , BackDiv} from './style';
import SwipeableViews from 'react-swipeable-views';
import backi1 from '../../static/img/03.jpg'
import backi2 from '../../static/img/06.jpg'
import backi3 from '../../static/img/04.jpg'

const styles = {
    root: {
      padding: '0 25px',
    },
    slideContainer: {
    //   padding: '0 10px',
    },
    slide: {
      padding: 25,
      minHeight: 500,
      color: '#fff',
      
    }
  };
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
                </CardMenu>
                <CardSwiper>
                    <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
                        <div style={Object.assign({}, styles.slide)}>
                            <div className='swiper-react' style={{backgroundImage: 'url('+ backi1 +')'}}>
                              <BackH2>Night sky</BackH2>
                              <BackDiv>
                                <span>October 6th</span>
                                <span><i className='iconfont'>&#xe637;</i></span>
                                <span>Sydney</span>
                              </BackDiv>
                            </div>
                            
                        </div>
                        <div style={Object.assign({}, styles.slide)}>
                            <div className='swiper-react' style={{backgroundImage: 'url('+ backi2 +')'}}></div>
                        </div>
                        <div style={Object.assign({}, styles.slide)}>
                            <div className='swiper-react' style={{backgroundImage: 'url('+ backi3 +')'}}></div>
                        </div>
                    </SwipeableViews>
                </CardSwiper>
            </CardBox>
            
        )
    }
}
export default connect(null,null)(Card)