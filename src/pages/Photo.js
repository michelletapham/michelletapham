import React, { PureComponent } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Images from '../data/Images';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export default class Photo extends PureComponent {
    render() {
      return (
        <div className="photo fadeInUp-animation">
          <Container>
            <Row>
              <Header />
            </Row>
            <Row className="header">
              <h4>My Photography Over the Years (2018 - Present)</h4>
              <p>What started out as being the designated photographer during family road trips to capturing people's cherished moments.</p>
            </Row>
            <Row className="photo-grid">
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