import styled, {createGlobalStyle} from 'styled-components';


export const Container = styled.div`
    height: 10vh;
    background-color: transparent;
    display:flex;
    position:sticky;


  @media only screen and (max-width: 800px) {
    justify-content:center;

    margin-left:-20px;
    }
`

export const Box = styled.div`
    height: 10vh;
    display: flex;
`

export const ItemsContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;

`


export const TitleContainer = styled.div`
    display:flex;
    align-items: center;
    width: fit-content;
    height: 100%;

width: 50vw;
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
