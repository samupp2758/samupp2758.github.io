import {Container, 
    Title,
    Box,
    TitleContainer,
    ItemsContainer,
    HireMe,
    Item} from './style/Menu'


function Menu () {

    return(
        <Container>
            <Box>
                <TitleContainer>
                    <Title>S</Title>
                </TitleContainer>
                <ItemsContainer>
                    <Item>About</Item>
                    <Item>Contact</Item>
                    <Item>Projects</Item>
                    <HireMe>Hire Me</HireMe>
                </ItemsContainer>
            </Box>
        </Container>
    )
}

export default Menu