import styled, {createGlobalStyle} from 'styled-components';


export const Container = styled.div`
    height: 90vh;
    width:100%;
    align-items:center;
    justify-content:center;
    display:flex;
    margin-top:20px;
`

export const Box = styled.div`
    height: 90%;
    max-width:1200px;
    width:90%;
    background-color: ${(props)=>props.color};
    display:flex;
    margin-left:35px;
    border-radius:20px;
    flex-direction: column;
    box-shadow: 2px 2px 20px ${(props)=>props.color};
`


export const Title = styled.p`
font-size: 40pt;
color: ${(props)=>props.color};
font-weight: 700;
line-break: normal;
margin-left:30px;
@media only screen and (max-width: 550px) {
font-size: 2.5em;
}



`

export const Header = styled.p`
display:flex;
flex-direction:row;
align-items:center;
margin-top:30px;

`


export const Subtitle = styled.p`
width:60%;
font-size: 15pt;
color: ${(props)=>props.color};
font-weight: 500;
line-break: normal;
margin-top:10px;
margin-left:30px;
@media only screen and (max-width: 550px) {
font-size: 2.5em;
}



`


export const ButtonIconLink = styled.p`

font-size: 15pt;
font-weight: 400;
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