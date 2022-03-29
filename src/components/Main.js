import { 
    MainContainer,
    Title, 
    SubTitle,
    _1_Section,
    Left,
    Right,
    Logo,
    Symbol,
    Bk
    } from "./style/Main"
    
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Menu from './Menu'
import { LazyLoadComponent } from 'react-lazy-load-image-component';




function Main (){
    const styles = {
        bounce: {
          animation: 'x 1s',
          animationName: Radium.keyframes(bounce, 'bounce')
        }
      }

    return (
        <MainContainer style={styles.bounce}>
            <Menu/>
            <_1_Section>
                <Left>
                    <Title>Hi, I'm Samuel</Title>
                    <SubTitle>This is my SubTitle, Hope you like it :)</SubTitle>
                </Left>
                <Right>
                    <Logo>
                        <LazyLoadComponent>
                            <Symbol src="./images/logoSymbol.png"/>
                        </LazyLoadComponent>
                        <Bk src="./images/logoBk.gif"/>
                    </Logo>
                </Right>
            </_1_Section>
        </MainContainer>
    )
}

export default Main