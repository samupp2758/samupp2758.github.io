import {
  MainContainer,
  Title,
  SubTitle,
  Logo,
  _1_Section,
  Center_Row_Container,
  Center_Row_Container_div,
  _2_Section,
  Footer,
} from "./style/Main";
import Medias from "./Medias";

import { useSpring, animated, easings } from "@react-spring/web";

function Main() {
  const springs = useSpring({
    from: {opacity:0,boxShadow:"0px 0px 0px #23232322",y:100},
    to:{opacity:1,boxShadow:"2px 4px 25px #23232322",y:0,borderRadius:10000000},
    config:{
        duration:1500,
    easing:easings.easeInOutCubic}
  });


  const gradientBG = useSpring({
    from: {background: "#1060ff"},
    to:[{background:"#f1f1f1"}
],
    config:{
        duration:1500,
        easing:easings.easeInExpo}
  });

  return (
    <MainContainer >
      <_1_Section style={gradientBG}>
        <animated.span
          style={springs}
        >
          <Center_Row_Container>
            <Logo src="./images/pp.png" />
            <Center_Row_Container_div>
              <Title>Hi, I'm Samuel</Title>
              <SubTitle>Full-Stack Developer</SubTitle>
              <Medias />
            </Center_Row_Container_div>
          </Center_Row_Container>
        </animated.span>
      </_1_Section>
      <Footer>Samuel Vargas@ 2022 - 2023</Footer>
    </MainContainer>
  );
}

/*
      

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

*/

export default Main;
