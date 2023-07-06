import styled, {createGlobalStyle} from 'styled-components';


export const Container = styled.div`
    height: 10vh;
    background-color: transparent;
    display:flex;
    position:sticky;
`

export const Box = styled.div`
    height: 10vh;
    display: flex;
`

export const ItemsContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 550px) {
    width: 100vw;

    }
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
    width: 140px;
    height: 45px;
    background-color: #1060ff;
    border:none;
    font-size: 15pt;
    border-radius:10px;
    color: #ffffff;
    box-shadow: 5px 7px 10px #23232322;
    transition:0.3s;
    line-break: always;

    &:hover {
    transition:0.3s;
    cursor: pointer;
    box-shadow: 5px 7px 20px #23232322;
    margin-top: -5px;
    }


    @media only screen and (max-width: 550px) {
    font-size: 10pt;

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
