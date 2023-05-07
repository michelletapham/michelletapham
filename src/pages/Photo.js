import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Images from '../data/Images';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Header from "../components/Navigation";
import Footer from "../components/Footer";

export default class Photo extends PureComponent {

    render() {

      return (
        <div className="photo">
          <Container>
            <Row>
              <Header />
            </Row>
            <Row className="title">
              <h1>taken on my <span className="highlight">sony a6000</span></h1>
            </Row>
            <Row className="photo-grid fadeInUp-animation">
              <ImageList variant="masonry" cols={3} gap={15}>
                {Images.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Row>     
            <Row>
              <Footer/>
            </Row> 
          </Container>
        </div>
      );
    }
}