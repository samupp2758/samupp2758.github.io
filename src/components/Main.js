import { 
    MainContainer,
    Title, 
    SubTitle,
    _1_Section,
    Left,
    Right,
    Files,
    Rightitle,
    sub_right,
    Itens_,
    Name,
    Item,
    V,
    B,
    Line,
    N,
    K,
    LB,
    CC,
    Dev,
    Dev_N
    } from "./style/Main"
    
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Menu from './Menu'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { Logo } from "./style/Menu";




function Main (){
    const styles = {
        bounce: {
          animation: 'x 1s',
          animationName: Radium.keyframes(bounce, 'bounce')
        }
      }

    return (
        <MainContainer style={styles.bounce}>
            <_1_Section>
                <Logo src='./images/pp.jpeg'/>
                <Menu/>
                <Left>
                    <Title>Hi, I'm Samuel</Title>
                    <Dev><Dev_N><Line>{"<"}<N>TheDeveloper</N>{"/>"}</Line></Dev_N></Dev>
                </Left>
                <Files>
                    <Right>
                        <sub_right>
                            <Rightitle>index.js</Rightitle>
                        </sub_right>
                        <Itens_>
                            <Item><Name>
                                <Line><K>var </K>hello_world = <V>"Hey, my name is Samuel, I am a software developer based on Juiz de Fora - Brazil"</V>;</Line>
                                <Line><CC>//Working remotely would not hurt, ok?</CC></Line>
                                <Line><K>var </K>stacks = {"["}
                                <Line><V>"React.js"</V>,</Line>
                                <Line><V>"React Native"</V>,</Line>
                                <Line><V>"Node.js"</V>,</Line>
                                <Line><V>"PHP - Frameworks"</V>,</Line>
                                <Line><V>"Swift"</V>,</Line>
                                <Line><V>"Java"</V>,</Line>
                                {"]"};</Line>
                            </Name></Item>
                        </Itens_>
                    </Right>




                </Files>
            </_1_Section>

        </MainContainer>
    )
}


/*


                    <Right>
                        <sub_right>
                            <Rightitle>Config.json</Rightitle>
                        </sub_right>
                        <Itens_>
                            <Item><Name>
                                <K>{"{"}</K>
                                <Line><N>"name"</N>: <V>"my-site"</V>,</Line>
                                <Line><N>"version"</N>: <V>"0.1.0"</V>,</Line>
                                <Line><N>"private"</N>: <B>true</B>,</Line>
                                <Line><N>"dependencies"</N>: <K>{"{"}</K></Line>
                                <Line><N>"@testing-library/jest-dom"</N>: <V>"^5.16.2"</V>,</Line>
                                <Line><N>"@testing-library/react"</N>: <V>"^12.1.2"</V>,</Line>
                                <Line><N>"@testing-library/user-event"</N>: <V>"^13.5.0"</V>,</Line>
                                <Line><N>"radium"</N>: <V>"^0.26.1"</V>,</Line>
                                <Line><N>"react"</N>: <V>"^17.0.2"</V>,</Line>
                                <Line><N>"react-animations"</N>: <V>"^1.0.0"</V>,</Line>
                                <Line><N>"react-dom"</N>: <V>"^17.0.2"</V>,</Line>
                                <Line><N>"react-lazy-load-image-component"</N>: <V>"^1.5.1"</V>,</Line>
                                <Line><N>"react-scripts"</N>: <V>"^5.0.0"</V>,</Line>
                                <Line><N>"react-social-icons"</N>: <V>"^5.11.0"</V>,</Line>
                                <Line><N>"styled-components"</N>: <V>"^5.3.3"</V>,</Line>
                                <Line><N>"web-vitals"</N>: <V>"^2.1.4"</V></Line>
                                <LB><K>{"}"}</K></LB>
                                <K>{"}"}</K>
                                </Name></Item>
                        </Itens_>
                    </Right>


                <Right>
                    <sub_right>
                        <Rightitle>Stacks</Rightitle>
                    </sub_right>
                    <Itens_>
                        <Item><Name>Node.js</Name></Item>
                        <Item><Name>Node.js</Name></Item>
                        <Item><Name>Node.js</Name></Item>
                        <Item><Name>Node.js</Name></Item>
                        <Item><Name>Node.js</Name></Item>
                    </Itens_>
                </Right>


                <Right>
                    <Logo>
                        <LazyLoadComponent>
                            <Symbol src="./images/logoSymbol.png"/>
                        </LazyLoadComponent>
                        <Bk src="./images/logoBk.gif"/>
                    </Logo>
                </Right>
*/

export default Main