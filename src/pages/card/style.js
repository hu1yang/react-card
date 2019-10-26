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
export const CardSwiper = styled.div`
    padding-top: 10%;
    .swiper-react{
        height: 500px;
        border-radius: 10px;
        background-size:100% 100%;
        margin: 0 -12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`
export const BackH2 = styled.h2`
    text-align: center;
    padding: 35px 0;
    font-size: 18px;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    opacity: 0.9;
`
export const BackDiv = styled.div`
    display:flex;
    flex-flow:  row nowrap;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
    font-size: 12px;
    span{
        flex: 1;
        text-align: center;
        text-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
        font-weight: 100;
        font-size: 12px;
        opacity: 0.7;
    }
`