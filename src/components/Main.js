import { 
    MainContainer,
    Title, 
    SubTitle,
    _1_Section,
    } from "./style/Main"

import Menu from './Menu'

function Main (){
    return (
        <MainContainer>
            <Menu/>
            <_1_Section>
                <Title>Hi, I'm Samuel</Title>
                <SubTitle>Hi, I'm Samuel</SubTitle>
            </_1_Section>
        </MainContainer>
    )
}

export default Main