import styled, {keyframes,createGlobalStyle} from 'styled-components';
import { fadeIn } from 'react-animations';
import { animated } from '@react-spring/web';

const bounceAnimation = keyframes`${fadeIn}`;
/*
 *{
      font-family: sans-serif;
      margin:0;
      animation: 1s ${bounceAnimation};
  }*/

export const GlobalStyles = createGlobalStyle`
 
*{
    font-family: sans-serif;
    margin:0;
    padding;0;
}
  body{
    background: #f1f1f1;
    }
    html{

    background: #f1f1f1;
    }
`

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;    

`

export const _1_Section = styled(animated.div)`
    width: 100%;
    min-height: 100vh;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`


export const Title = styled.p`
    font-size: 40pt;
    color: #1060ff;
    font-weight: 700;
    line-break: normal;
    margin-left: 20px;
    @media only screen and (max-width: 550px) {
    font-size: 2.5em;
    }

    

`
export const SubTitle = styled.p`
    font-size: 20pt;
    color: #232323;
    font-weight: 400;
    margin-left: 20px;

    @media only screen and (max-width: 550px) {
    font-size: 1em;
    }
`


export const Center_Row_Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius:100000000px;
    background: #f1f1f1;
    
    
`

export const Center_Row_Container_div = styled.div`
width:450px;
margin-top:35px;
`


export const Logo = styled.img`
    font-size: 20pt;
    font-weight: 400;
    width: 40vh;
    height: 40vh;
    border-radius:2000px;
    color: #1060ff ;

    margin:10px;
`


export const Footer = styled.p`
text-align:center;
margin-bottom:20px;
margin-top:20px;
`

export const _2_Section = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`