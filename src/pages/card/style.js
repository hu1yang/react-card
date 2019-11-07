import styled from 'styled-components';

export const CardBox = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    background: #b6bec5;
    opacity: 0.7;
`
export const CardTop = styled.div`
    display:flex;
    flex-flow:  row nowrap;
    justify-content: space-between;
    padding: 5% 5%;
`
export const CardTops = styled.div`
    color: #eef5fa;
    i{
        font-size: 22px;
    }
    
`
export const CardMenu = styled.div`
    width: 60%;
    top: 10%;
    margin: 0 auto;
    border-bottom: 2px solid #ccd4da;
    padding: 5% 10%;
    display: flex;
    flex-flow:  row nowrap;
    justify-content: space-between;
    font-size: 14px;
`
export const CardMenuL = styled.div`
    color: #e8eef3;
    .active{
        color: #fefefe;
    }
`
export const Cardlist = styled.div`
    margin: 30px;
    height: 496px;
    transform: scaleX(1);
    transition: all 0.6s ease;
`
export const CardlistUl = styled.ul`
    display: flex;
    height: 100%;
`
export const CardlistLi = styled.li`
    flex: 1;
    transition: all 0.6s ease;
    
`
export const Cardall = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    .active{
        transform: translate3d(0, -100px, 0);
    }
    .actives{
        transform: scale(1);
        opacity: 1;
    }
`
export const CardBack = styled.div`
    position: absolute;
    left: 18px;
    right: 18px;
    top: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 500px;
    border-radius: 15px;
    overflow: hidden;
    background-color: #333;
    background-position: center;
    box-shadow: 0 22px 16px -12px rgba(0, 0, 0, 0.2);
    filter: grayscale(0.4);
    transition: all 0.6s ease;
    will-change: transform, left, right;
    ::before{
        content: '';
        position: absolute;
        z-index: -1;
        display: block;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(99, 94, 86, 0.5), rgba(99, 94, 86, 0) 30%, rgba(64, 65, 66, 0) 70%, rgba(33, 34, 35, 0.9));
    }
`
export const CardBackH2 = styled.h2`
    padding: 30px 0;
    text-align: center;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    opacity: 0.9;
    color: white;
`
export const CardBackLocation = styled.div`
    display:flex;
    text-transform: uppercase;
    span{
        padding: 20px 0;
        flex: 1;
        text-align: center;
        text-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
        font-weight: 100;
        font-size: 12px;
        opacity: 0.7;
        color: white;
    }
    .iconfont{
        width: 20px;
        flex: none;
    }
`

export const Cardclick = styled.div`
    position: relative;
    padding-top: 250px;
    height: 100%;
    overflow: hidden;
    border-radius: 4px;
    color: #999;
    background-color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    font-size: 12px;
    transition: all 0.6s ease;
    opacity: 0;
    transform: scale(0.8);
    
`
export const CardMap = styled.div`
    height: 100px;
    opacity: 0;
    transform: translate3d(0, 0, 0);
`
export const CardHead = styled.div`
    padding-top: 33px;
    border-bottom: 1px solid #f9f9f9;
    p{
        padding: 6px 24px 0;
        line-height: 16px;
        transform: translate3d(0, 22px, 0);
    }
`
export const CardStar = styled.div`
    margin-left: 152px;
    color: #c48cf5;
    transform: translate3d(65%, 0, 0);
    display: inline-block;
    i{
        margin: 0 1px;
        line-height: 16px;
    }
`
export const CardBody = styled.div`

`