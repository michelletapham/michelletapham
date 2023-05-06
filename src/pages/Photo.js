import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Images from '../data/Images';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Photo extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {loading: true}
  } 

  componentDidMount(){
     this.setState({loading: false})
  }

    render() {

      return (
        <div className="photo ">
          <Container>
            <Row>
              <Header />
            </Row>
            <Row className="header">
              <p>taken on my sony a6000</p>
            </Row>
            <Row className="photo-grid fadeInUp-animation">
              {this.state.loading ? <Spinner className="spinner" animation="grow"/> :
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
              }
            </Row>     
            <Row>
              <Footer/>
            </Row> 
          </Container>
        </div>
      );
    }
}