import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Header from "../components/Navigation";
import Footer from "../components/Footer";
import MoodboardImages from '../data/MoodboardImages';

export default class Moodboard extends PureComponent {

    render() {
      return (
        <div className="moodboard">
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row className="content">
                    <ImageList className="fadeInUp-animation" variant="masonry" cols={4} gap={10}>
                        {MoodboardImages.map((item) => (
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