import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

import totoroLoading from '../assets/totoro-loading.gif'
import homeVideo from '../assets/home-video.mp4'


export default class Home extends PureComponent {
    render() {
      return (
        <div className="home fadeInUp-animation">
          <Container>
            <Row>
              <Col lg={5}>
                <video className="home-video" src={homeVideo} autoPlay loop muted/>
              </Col>
              <Col lg={7}>
                <Row className="home-header">
                  <h1><span role="img" aria-label="sparkle-emoji">✨</span> relaxmich</h1>
                  <TypeAnimation
                    sequence={[
                      'A space to reflect.',
                      1000,
                      'A space to create.',
                      1000,
                      'A space to document.',
                      1000,
                      'A space to grow.',
                      1000
                    ]}
                    speed={50}
                    style={{ fontSize: '1.4em' }}
                    repeat={Infinity}
                  />
                </Row>
                <Row>
                  <Col lg={5}/>
                  <Col lg={7}>
                    <Link className="btn-enter" to="/blog">Come On In!</Link>
                    <img className="totoro-gif" src={totoroLoading} alt ="totoro walking" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
}