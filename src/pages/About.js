import React, { PureComponent } from "react";
import { TypeAnimation } from "react-type-animation";
import { SocialIcon } from 'react-social-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/Navigation";
import Footer from "../components/Footer";
import AboutPhoto from "../assets/about/michelle.jpg"
import Signature from "../assets/about/signature.png"

export default class About extends PureComponent {
    render() {
      return (
        <div className="about">
          <Container>
            <Row>
              <Header/>
            </Row>
            <Row className="content fadeInUp-animation">
              <Col xl={5}>
                <Row>
                  <img className="about-photo" src={AboutPhoto} alt="Michelle" />
                </Row>
                <Row className="socials">
                  <SocialIcon bgColor="#AEC6CF" url="https://www.instagram.com/michelletapham/" target="_blank" style={{ height: 40, width: 40 }}/>
                  <SocialIcon bgColor="#C1E1C1" url="https://open.spotify.com/user/12157815223?si=630cbaf6346a411f" target="_blank" style={{ height: 40, width: 40 }}/>
                  <SocialIcon bgColor="#FF6961" url="https://www.youtube.com/channel/UCeS_o8q8eJHiSE9phvcbp2Q" target="_blank" style={{ height: 40, width: 40 }}/>
                </Row>
              </Col>
              <Col xl={7}>
                <Row className="bio">
                  <Row className="title">
                    <h2><span role="img" aria-label="handwave-emoji">👋🏼</span> Hello ... Michelle here!</h2>
                    <a className="subtext" href="https://www.youtube.com/watch?v=ouA-U4x17KY&ab_channel=Lelouch22229" target="_blank">(brownie points if you understood that reference)</a>
                  </Row>
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
                  <p>Born and raised in Seattle, Washington and recent graduate from the University of Washington. Currently, I live in Los Angeles, California where I work for a music streaming service as a beep boop girly.</p>
                  <p>In my free time, I like to read memoirs, listen to <a href="https://www.youtube.com/watch?v=c0-hvjV2A5Y&ab_channel=BoilerRoom" target="_blank">Fred Again...'s boiler room set</a>, perfect my espresso shot, play tennis, and watch slice of life anime (and becoming more of a hopeless romantic).</p>
                  <p>I wanted to create this website to document my life during this period of change, ongoing projects, and my unfiltered thoughts without the anxiety that comes along with posting on social media.</p>
                  <p>Have fun browsing! :)</p>
                  <img className="signature-img" src={Signature} alt="Signature"/>
                  <i>P.S. I was originally going to build this website using Squarespace until I saw that price ($17/month).
                    Instead, I decided to use my college degree to use and build this site out with React.js (shoutout INFO340 for the skills)!</i>
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