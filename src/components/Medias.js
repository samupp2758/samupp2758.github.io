import {Container, 
    Box,
    ItemsContainer,
    Item} from './style/Medias'
import { SocialIcon } from 'react-social-icons';



function Medias () {

    return(
        <Container>
            <Box>
                <ItemsContainer>
                    <Item><SocialIcon fgColor="#1060ff" bgColor="#f1f1f1" url="https://www.twitter.com/smacedovargas/" /></Item>
                    <Item><SocialIcon fgColor="#1060ff" bgColor="#f1f1f1" url="https://github.com/samupp2758" /></Item>
                    <Item><SocialIcon fgColor="#1060ff" bgColor="#f1f1f1" url="https://www.linkedin.com/in/samuel-vargas-12884a6b/" /></Item>
                    <Item><SocialIcon fgColor="#1060ff" bgColor="#f1f1f1" url="https://www.instagram.com/samu.el_v/" /></Item>
                    
                </ItemsContainer>
            </Box>
        </Container>
    )
}

export default Medias

/*
<HireMe onClick={()=>{window.location = "mailto:samuelmv123@gmail.com"}}>Hire me</HireMe>*/