import React, { PureComponent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Message from "../components/Message";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default class Blog extends PureComponent {
    render() {
      return (
        <div className="blog fadeInUp-animation">
            <Container>
                <Row>
                    <Header/>
                </Row>
                <Row className="content">
                    <Message />
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </div>
      );
    }
}