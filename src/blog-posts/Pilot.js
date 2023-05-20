import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from "../components/Navigation";
import BlogHeader from "../components/BlogHeader";
import Photo from "../components/Photo";
import Video from "../components/Video";

import Footer from "../components/Footer";

import Who from "../assets/blog posts/pilot/who.jpg";
import What from "../assets/blog posts/pilot/what.jpg";
import Where from "../assets/blog posts/pilot/where.jpeg";
import When from "../assets/blog posts/pilot/when.mov";
import Why from "../assets/blog posts/pilot/why.jpg";

export default class Pilot extends PureComponent {
    render() {
      return (
        <div className="blog-post">
          <Container>
            <Row>
              <Navigation/>
            </Row>
            <Row className="content fadeInUp-animation">
                <BlogHeader date="May 11th, 2023" title="Pilot" subtitle="Hello World!" image="https://images.gr-assets.com/hostedimages/1489099072ra/22185566.gif" altText="Studio Ghibli Scenary"/>
                <div className="body">
                  <div className="section">
                    <p>
                      Michelle back at it again with another medium to document her life. You think after 
                      having a lifestyle Instagram Account, Youtube channel, and Notion blog (in which all 
                      of them have been inactive for months), I would stop here? Nope, you’re wrong!
                    </p>
                    <p>
                      After years of contemplating, I decided to full send and create my own personal website.blog!
                      No, this is not a portfolio website that I will show to employers. A website just for myself.
                    </p>
                  </div>
                  <div className="section">
                    <h3>Why a website Michelle?</h3>
                    <ol>
                      <li>I’ve been wanting to brush up on my web development skills</li>
                      <li>
                        I wanted to document and share what’s been going on my life (the good and the bad) without the stress that comes from the likes/comments. With website being a
                        one-sided medium, I'm able to share things about my life without knowing who it reaches (unless someone personally reaches out to me).
                      </li>
                    </ol>
                  </div>
                  <div className="section">
                    <p>Anyways, for those who somehow stumbled upon this site and don’t know me super well, here’s a brief introduction using the 5 Ws.</p>
                    <div>
                      <Photo image={Who} subtitle="DineLA in Culver City, Spring 2023" altText="Michelle" isVertical={true} />
                      <h3>Who</h3>
                      <p>Hi! I’m Michelle, a Vietnamese-American girl based in Los Angeles. I graduated from university last year, 
                        so this past year has been going waves of post-grad crises as I navigate life after college and starting over in a new city.
                      </p>
                    </div>
                    <div>
                      <Photo image={What} subtitle="Texting my friend Brooks of my recent revelation." altText="iMessage Conversation" isVertical={true} />
                      <h3>What</h3>
                      <p>… I’ve been up to? I’ve recently picked up piano again, trying new tofu-based recipes, going on walks along Santa Monica 
                        (after I discovered I live a 15 minute drive away). 
                      </p>
                    </div>
                    <div>
                      <Photo image={Where} subtitle="Alki Beach, Spring 2019" altText="Alki Beach, Seattle" isVertical={false} />
                      <h3>Where</h3>
                      <p>Born and raised in the greater Seattle area. Spent the first 22 years of my life there until I was unexpectedly placed 
                        in LA for my full-time job so here we are. It’s been a work in progress, but each day the city starts to grow on me more and more. :)
                      </p>
                    </div>
                    <div>
                      <Video video={When} subtitle="21st Birthday in San Francisco, Summer 2021" altText="21st Birthday in San Francisco" isVertical={false} />
                      <h3>When</h3>
                      <p>Born in the year 2000! I’ll be turning 23 next August (what!! crazy!!)</p>
                    </div>
                    <div>
                      <Photo image={Why} subtitle="Santa Monica, Spring 2023" altText="Santa Monica Beach" isVertical={false} />
                      <h3>Why</h3>
                      <p>I wanted to create this blog reflect and document what’s been going on in my life, recent learnings, and things I’ve been doing in becoming a better person. I’ll probably be opening up about things like my adjustment into LA, friendships, relationships, my identity, career, etc.</p>
                    </div>
                  </div>
                </div>
              <Row>
                <Footer/>
              </Row>
            </Row>
          </Container>
        </div>
      );
    }
}