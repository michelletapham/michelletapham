import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Spotify } from "react-spotify-embed";


export default class Currents extends PureComponent {
    render() {
      return (
        <div className="currents">
            <Container>
                <Row className="content">
                    <Col md={4} className="col-1">
                        <h1>Current</h1>
                    </Col>
                    <Col md={8} className="col-2">
                        <Row>
                            <h2>Read</h2>
                            <a href="https://www.goodreads.com/en/book/show/60831918" target="_blank">Dust Child by Nguyễn Phan Quế Mai</a>
                        </Row>
                        <Row>
                            <h2>Playlist on Repeat</h2>
                            <Spotify wide className="spotify" link="https://open.spotify.com/playlist/359q7MDjfHwdw3U8qXHucW?si=ce555728d4384a22" />
                        </Row>
                        <Row>
                            <h2>Piano Piece I'm Learning</h2>
                            <a href="https://www.youtube.com/watch?v=HPXMS9TGFWE&ab_channel=~Alex%27sShigatsuOST~" target="_blank">Watashi no Uso - Your Lie in April OST</a>
                        </Row>
                        <Row>
                            <h2>Things I Want to Prioritize</h2>
                            <p>Getting enough sleep, stretching, moving my body.</p>
                        </Row>
                        <Row>
                            <h2>Obsession</h2>
                            <a href="https://www.youtube.com/watch?v=c0-hvjV2A5Y&ab_channel=BoilerRoom" target="_blank">Fred Again...</a>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
      );
    }
}