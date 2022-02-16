import styled, {createGlobalStyle} from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 10vh;
    background-color: transparent;
    display:flex;
    justify-content: center;
    align-items: center;
    position:sticky;
`

export const Box = styled.div`
    width: calc(100%);
    height: 10vh;
    background-color: #f1f1f1;
    display: flex;
`

export const ItemsContainer = styled.div`
display:flex;
width: 50vw;
align-items: center;
justify-content: flex-end;
`


export const Title = styled.p`
    font-size: 20pt;
    margin-left:20px;
    font-weight: 400;
    color: #1060ff ;

`

export const TitleContainer = styled.div`
    display:flex;
    align-items: center;
    width: fit-content;
    height: 100%;

width: 50vw;
`

export const HireMe = styled.button`
    margin-left:10px;
    margin-right: 20px;
`


export const Item = styled.p`
margin-left:20px;

font-size: 15pt;
    font-weight: 400;
    color: #232323aa ;
`
