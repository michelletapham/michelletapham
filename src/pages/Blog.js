import React, { PureComponent } from "react";
import Header from "../components/Navigation";
import Footer from "../components/Footer";
import Message from "../components/Message";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

import BlogPosts from '../data/Blog-Posts';

export default class Blog extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {isReady: true}
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
                            <Link className="link" to={"/blog/" + post.url} style={{ textDecoration: 'none' }}>
                                <Row className="blog-row">
                                    <Col lg={6}>
                                        <img className="blog-preview-photo" src={post.image} />
                                    </Col>
                                    <Col lg={6} className="blog-preview">
                                        <p className="date">{post.date}</p>
                                        <h2>{post.title}</h2>
                                        <p>{post.subtitle}</p>
                                    </Col>
                                </Row>
                            </Link>
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