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
`
export const CardBack = styled.div`
    position: absolute;
    left: 23px;
    right: 23px;
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
export const Cardclick = styled.div`

`