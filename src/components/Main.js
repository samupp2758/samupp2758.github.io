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
    Dev_N,
    Footer
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
                            <Rightitle>welcome.js</Rightitle>
                        </sub_right>
                        <Itens_>
                            <Item><Name>
                                <Line><K>var </K>hello_world = <V>"Hey, my name is Samuel, I am a software developer based in</V></Line>
                                <Line><V>Tulsa - Oklahoma,USA"</V>;</Line>
                                <Line><CC>//</CC></Line>
                                <Line><K>var </K>start = <V>"I've been working as a Full-stack developer for over 6 years now, focusing most</V></Line>
                                <Line><V>  of my works in PHP and/or Node.js back-ends, with a React.js/ReactNative and/or Java/Swift front-ends."</V>;</Line>
                            </Name></Item>
                        </Itens_>
                    </Right>

                    <Title>Jobs</Title>
                    <Right>
                        <sub_right>
                            <Rightitle>Front-end React Native Developer</Rightitle>
                        </sub_right>
                        <Itens_>
                            <Item><Name>
                            <Line><K>var </K>time = <V>"Abril 2022 — June 2022"</V></Line>
                            <Line><K>var </K>company = <V>"RBM Web"</V>;</Line>
                            <Line><CC>//</CC></Line>
                            <Line><K>var </K>overview = <V>"During this period working at RBM Web, I started
                                 working with supporting mobiles already online and operating, posterly starting
                                 receiving tasks to new projects too, giving me the opportunities to work with
                                 gitlab dev/release/master infrastructure, React-Native’s latest updates and
                                 scaled up policies inside new projects."</V></Line>
                            </Name></Item>
                        </Itens_>
                        <Rightitle></Rightitle>
                        <Rightitle></Rightitle>

                        <sub_right>
                            <Rightitle>Software Developer and Designer</Rightitle>
                        </sub_right>
                        <Itens_>
                            <Item><Name>
                            <Line><K>var </K>time = <V>"January 2017 — February 2022"</V></Line>
                            <Line><K>var </K>company = <V>"Netlogica LTDA"</V>;</Line>
                            <Line><CC>//</CC></Line>
                            <Line><K>var </K>overview = <V>"I work as a software engineer at Netlogica, mainly creating data analytics tools, developing mobile apps, and web pages. I also work as a designer, creating folders and designs for the marketing team.
                                Technologies used:
                                NodeJS, Express, React Native, ReactJS, JWS
                                Google Cloud Service, and MySql"</V></Line>
                            </Name></Item>
                        </Itens_>
                        <Rightitle></Rightitle>
                        <Rightitle></Rightitle>

                        <sub_right>
                            <Rightitle>Website developer and Crew leader</Rightitle>
                        </sub_right>
                        <Itens_>
                            <Item><Name>
                            <Line><K>var </K>time = <V>"September 2019 — 2022"</V></Line>
                            <Line><K>var </K>company = <V>"ALICER - Associação Lixo Certo"</V>;</Line>
                            <Line><CC>//</CC></Line>
                            <Line><K>var </K>overview = <V>"During my freshman year at high school, I was presented with the idea of developing a website and working with the social media of Alicer, a recycling non-profit organization in Brazil."</V></Line>
                            </Name></Item>
                        </Itens_>
                        <Rightitle></Rightitle>
                        <Rightitle></Rightitle>

                        <sub_right>
                            <Rightitle>Data Science Researcher</Rightitle>
                        </sub_right>
                        <Itens_>
                            <Item><Name>
                            <Line><K>var </K>time = <V>"February 2021 — September 2021"</V></Line>
                            <Line><K>var </K>company = <V>"Federal Institute of Technology of the Southeast of Minas Gerais"</V>;</Line>
                            <Line><CC>//</CC></Line>
                            <Line><K>var </K>overview = <V>"Member of the research group focused on historical data related to optical improvements throughout history. Focusing on analyzing the relations between the physicists on big databases our time. NodeJS/ VOSViewer was used during the projects."</V>;</Line>
                            </Name></Item>
                        </Itens_>
                        <Rightitle></Rightitle>
                        <Rightitle></Rightitle>

                        <sub_right>
                            <Rightitle>Software/Design Consultant/Specialist</Rightitle>
                        </sub_right>
                        <Itens_>
                            <Item><Name>
                            <Line><K>var </K>time = <V>"June 2021 — December 2021"</V></Line>
                            <Line><K>var </K>company = <V>"Federal Institute of Technology of the Southeast of Minas Gerais"</V>;</Line>
                            <Line><CC>//</CC></Line>
                            <Line><K>var </K>overview = <V>"Member in a crew to develop a consultors program in Brazil, helping library owners to improve their results and market presence via social media and marketing strategies."</V>;</Line>
                            </Name></Item>
                        </Itens_>
                    </Right>




                </Files>
            </_1_Section>
            <Footer>Samuel Vargas@ 2022 - 2023</Footer>
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