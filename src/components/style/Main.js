import styled, {createGlobalStyle} from 'styled-components';
import RobotoBold from './../assets/fonts/Roboto-Bold.ttf';
import RobotoRegular from './../assets/fonts/Roboto-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  *{
      font-family: sans-serif;
      margin:0;
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
    justify-content: center;
    flex-direction: column;
`


export const Title = styled.p`
    font-size: 50pt;
    color: #1060ff;
    font-weight: 700;
    line-break: normal;
    margin-left: 20vh;

`
export const SubTitle = styled.p`
    font-size: 30pt;
    color: #232323aa;
    font-weight: 400;
    margin-left: 20vh;
`
