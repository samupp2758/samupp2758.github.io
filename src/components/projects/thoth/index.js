import {Container, 
    Box,
Title,
Header,
ButtonIconLink,
Subtitle,
} from './style'
import { SocialIcon } from 'react-social-icons';



function Thoth () {

    return(
        <Container>
            <Box color="#5406E2">
                <Header>
                    <Title color='#F1F1F1'>Thoth App</Title>
                    <ButtonIconLink><SocialIcon fgColor="#F1F1F1" bgColor="#5406E2" url="https://github.com/samupp2758/thoth-app" /></ButtonIconLink>
                </Header>
                <Subtitle color='#F0F0F0'>The application will be a question-and-answer forum, with the scope of elementary and high school subjects in any language. As our project is to transform education into a universal system, questions can be asked for free and any common user can ask them.</Subtitle>
            </Box>
        </Container>
    )
}

export default Thoth

/*
<HireMe onClick={()=>{window.location = "mailto:samuelmv123@gmail.com"}}>Hire me</HireMe>

 However, although anyone can ask, only "special users" can answer them. To become a special user, the person must inform: a document that identifies him (CPF, RG, Biometrics, etc.); a certificate in the field you want to work in; a digital wallet. All answers cataloged as “best answer” will generate cryptocurrency revenue for the special user. This best answer will be the weighted average between the evaluation of the user who had his question answered and the general evaluation of the public through an “up” or “down”. Revenue will be based on the number of advertisements “ads” that will be converted into cryptocurrencies and which will be automatically distributed to the special user's digital wallet. The digital wallet works with two keys: the public key with transaction hashing and the private key with withdrawal hashing. Our system will only request transaction hashing for security reasons.

*/

