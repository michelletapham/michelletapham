import React, { PureComponent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Message from "../components/Message";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import BlogPosts from '../data/Blog-Posts';
import Photo from '../assets/moodboard/biking.jpg'

export default class Blog extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {isReady: false}
      } 
    
    render() {
      return (
        <div className="blog">
            <Container>
                <Row>
                    <Header/>
                </Row>
                <Row className="title">
                    <h1>reflections from an <span className="highlight">overthinker</span></h1>
                </Row>
                <Row className="content fadeInUp-animation">
                    {this.state.isReady ?
                        BlogPosts.map((post) => (
                            <Row className="blog-row">
                                <Col lg={6}>
                                    <img className="blog-preview-photo" src={post.image} />
                                </Col>
                                <Col lg={6} className="blog-preview">
                                    <p>{post.date}</p>
                                    <h1>{post.title}</h1>
                                    <p>{post.subtitle}</p>
                                </Col>
                            </Row>
                        )) 
                        : <Message />
                    }
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </div>
      );
    }
}