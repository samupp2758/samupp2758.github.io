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
                <ItemsContainer>
                    <Item><SocialIcon fgColor="#1060ff" bgColor="#f1f1f1" url="https://www.twitter.com/smacedovargas/" /></Item>
                    <Item><SocialIcon fgColor="#1060ff" bgColor="#f1f1f1" url="https://github.com/samupp2758" /></Item>
                    <Item><SocialIcon fgColor="#1060ff" bgColor="#f1f1f1" url="https://www.linkedin.com/in/samuel-vargas-12884a6b/" /></Item>
                    <Item><SocialIcon fgColor="#1060ff" bgColor="#f1f1f1" url="https://www.instagram.com/samu.el_v/" /></Item>
                    <HireMe onClick={()=>{window.location = "mailto:samuelmv123@gmail.com"}}>Hire me</HireMe>
                </ItemsContainer>
            </Box>
        </Container>
    )
}

export default Menu