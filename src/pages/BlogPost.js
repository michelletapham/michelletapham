import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Photo extends PureComponent {
    render() {
      return (
        <div className="blog-post">
          <Container>
            <Row>
              <Header />
            </Row>    
            <Row>
              <Footer/>
            </Row> 
          </Container>
        </div>
      );
    }
}