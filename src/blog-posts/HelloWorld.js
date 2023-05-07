import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from "../components/Navigation";
import Footer from "../components/Footer";

export default class HelloWorld extends PureComponent {
    render() {
      return (
        <div className="blog-post hello-world">
          <Container>
            <Row>
              <Header/>
            </Row>
            <Row className="content fadeInUp-animation">
                <h2>Hello World</h2>
            </Row>
            <Row>
              <Footer/>
            </Row>
          </Container>
        </div>
      );
    }
}