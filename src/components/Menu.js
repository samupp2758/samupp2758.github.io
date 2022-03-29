import {Container, 
    Logo,
    Box,
    TitleContainer,
    ItemsContainer,
    HireMe,
    Item} from './style/Menu'
import { SocialIcon } from 'react-social-icons';



function Menu () {

    return(
        <Container>
            <Box>
                <TitleContainer>
                    <Logo src='./images/logoSymbol.png'/>
                </TitleContainer>
                <ItemsContainer>
                    <Item><SocialIcon fgColor="#1060ff" bgColor="#f1f1f1" url="https://twitter.com/elsamu_v" /></Item>
                    <Item><SocialIcon fgColor="#1060ff" bgColor="#f1f1f1" url="https://www.instagram.com/samu.el_v/" /></Item>
                    <Item><SocialIcon fgColor="#1060ff" bgColor="#f1f1f1" url="https://github.com/samupp2758" /></Item>
                    <HireMe onClick={()=>{window.location = "mailto:samuelmv123@gmail.com"}}>Hire me</HireMe>
                </ItemsContainer>
            </Box>
        </Container>
    )
}

export default Menu