import styled, {keyframes,createGlobalStyle} from 'styled-components';
import { fadeIn } from 'react-animations';

const bounceAnimation = keyframes`${fadeIn}`;


export const GlobalStyles = createGlobalStyle`
  *{
      font-family: sans-serif;
      margin:0;
      animation: 1s ${bounceAnimation};
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
    background: #f1f1f1;

`

export const _1_Section = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


export const Title = styled.p`
    font-size: 50pt;
    color: #1060ff;
    font-weight: 700;
    line-break: normal;

    @media only screen and (max-width: 550px) {
    font-size: 2.5em;
    }

    

`
export const SubTitle = styled.p`
    font-size: 20pt;
    color: #232323;
    font-weight: 400;
    width: 500px;

    @media only screen and (max-width: 550px) {
    font-size: 1em;
    }
`


export const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;

`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const Symbol = styled.img`
    width: 400px;
    height: 400px;
    position: absolute;
    left:10px;
`

export const Bk = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 100vh;

`

export const Right = styled.div`
    width: 500px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 7px 7px #23232333;
    margin-top: 20px;
background: #232323;

@media only screen and (max-width: 550px) {
    width: 100%;

    border-radius: 0px;
    }
`
export const Files = styled.div`
display: grid;
flex-direction: row;

`

export const sub_right = styled.div`
background-color: #232323;
`

export const Rightitle = styled.p`
font-size: 15pt;
color: #f1f1f1;
font-weight: 500;
line-break: normal;
margin-top: 20px;
margin-left: 20px;
    background: #232323;
`


export const Itens_ = styled.div`
margin-top: 10px;
margin-bottom: 10px;
    background: #232323;
`
 
export const Name = styled.p`
font-size: 15pt;
color: #f1f1f1;
font-weight: 500;
line-break: normal;
margin-left: 30px;
margin-right: 30px;
padding-top: 10px;
padding-bottom: 10px;
    background: #232323;

    @media only screen and (max-width: 550px) {
    font-size: 1em;
    }

`

export const Item = styled.div`
    transition:0.3s;
    background: #232323;
      &:last-child {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }

`

export const Dev = styled.div`
    background: #232323;
    border-radius: 10px;
    margin-top: 10px;
    @media only screen and (max-width: 550px) {
    width: 100vw;
    border-radius: 0px;

    }
`
export const Dev_N = styled.p`
font-size: 35pt;
color: #f1f1f1;
font-weight: 500;
line-break: normal;
margin-left: 30px;
margin-right: 30px;
padding: 20px;
padding-top: 20px;
padding-bottom: 20px;
background: #232323;
@media only screen and (max-width: 550px) {
    font-size: 20pt;
    text-align:center ;
    }
`



export const V = styled.span`
color: #f99400;
    background: #232323;
`

export const B = styled.span`
color: #b80090;
    background: #232323;

`

export const N = styled.span`
color: #b0da09;
    background: #232323;

`

export const Line = styled.div`
color:#fff;
    background: #232323;
`

export const CC = styled.p`
color:#636363;

`

export const K = styled.span`
color: #f00a5e;
    background: #232323;

`

export const LB = styled.p`
margin-left: 30px;
    background: #232323;
`