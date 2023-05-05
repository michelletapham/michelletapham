import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutPhoto from "../assets/michelle.jpg"
import Signature from "../assets/signature.png"
import { TypeAnimation } from "react-type-animation";
import { Spotify } from "react-spotify-embed";


export default class About extends PureComponent {
    render() {
      return (
        <div className="about fadeInUp-animation">
          <Container>
            <Row>
              <Header/>
            </Row>
            <Row className="content">
              <Col xl={5}>
                <img className="about-photo" src={AboutPhoto} alt="Michelle" />
                <br/>
                <Spotify className="spotify" link="https://open.spotify.com/playlist/359q7MDjfHwdw3U8qXHucW?si=ce555728d4384a22" />
              </Col>
              <Col xl={7}>
                <Row className="bio">
                  <h2><span role="img" aria-label="handwave-emoji">👋🏼</span> Hello ... Michelle here!</h2>
                  <p className="subtext">(brownie points if you understood that reference)</p>
                  <p>
                    Who am I? Well I would say I'm a &nbsp;  
                    <TypeAnimation
                      sequence={[
                        '...coffee enthusiast',
                        1000,
                        '...uw recent grad',
                        1000,
                        '...software engineer',
                        1000,
                        '...amateur photographer',
                        1000,
                        '...good human.',
                        1000,
                      ]}
                      speed={50}
                      style={{fontSize: '1em', fontWeight: "bold"}}
                      repeat={Infinity}
                    />
                  </p>
                  <p>
                    After 22 years growing up in Seattle, Washington, I left my hometown and my
                    close friends/family to move down 1,100+ miles south and start over in Los Angeles, California. 
                  </p>
                  <p>
                    I decided to create this website because I wanted to document my life, ongoing projects, unfiltered thoughts in 
                    a low-pressure environment. If you somehow ended up here ... I see you peeping!
                  </p>
                  <p>Have fun browsing! :)</p>
                  <img className="signature-img" src={Signature} alt="Signature"/>
                  <i>
                    P.S. I was originally going to build this website using Squarespace until I saw that price ($17/month).
                    Instead, I decided to use my college degree to use and build this site out with React.js (shoutout INFO340 for the skills)!
                  </i>
                </Row>
              </Col>
            </Row>
            <Row>
              <Footer/>
            </Row>
          </Container>
        </div>
      );
    }
}