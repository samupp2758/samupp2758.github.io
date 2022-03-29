import styled, {keyframes,createGlobalStyle} from 'styled-components';
import { fadeIn } from 'react-animations';

const bounceAnimation = keyframes`${fadeIn}`;


export const GlobalStyles = createGlobalStyle`
  *{
      font-family: sans-serif;
      margin:0;
      animation: 1s ${bounceAnimation};
  }
`

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const _1_Section = styled.div`
    width: 100%;
    height: 90vh;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    flex-direction: row;
`


export const Title = styled.p`
    font-size: 50pt;
    color: #1060ff;
    font-weight: 700;
    line-break: normal;
    margin-left: 10vh;

`
export const SubTitle = styled.p`
    font-size: 20pt;
    color: #232323aa;
    font-weight: 400;
    margin-left: 10vh;
`


export const Left = styled.div`

    width: 50vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

`
export const Right = styled.div`
    width: 50vw;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
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

