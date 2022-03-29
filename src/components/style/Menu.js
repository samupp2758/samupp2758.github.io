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


export const Logo = styled.img`
    font-size: 20pt;
    margin-left:20px;
    margin-top: 10px;
    font-weight: 400;
    width: 10vh;
    height: 10vh;
    border-radius:20px;
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
    padding: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left:30px;
    background-color: #1060ff;
    border:none;
    font-size: 15pt;
    border-radius:10px;
    color: #ffffff;
    box-shadow: 5px 7px 10px #23232322;
    transition:0.3s;

    &:hover {
    transition:0.3s;
    cursor: pointer;
    box-shadow: 5px 7px 20px #23232322;
    margin-top: -5px;
    }
`


export const Item = styled.p`
    font-size: 15pt;
    font-weight: 400;
    color: #1060ff ;
    transition:0.3s;
    border-radius:100000000000000000000px;
    margin-left: 20px;

    &:hover {
    transition:0.3s;
    cursor: pointer;
    box-shadow: 5px 7px 20px #23232322;
    margin-top: -5px;
    }
`
