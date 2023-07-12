import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from "../components/Navigation";
import BlogHeader from "../components/BlogHeader";
import Photo from "../components/Photo";
import Footer from "../components/Footer";
import Covid from "../assets/blog posts/covid-thoughts/covid.jpg";
import Summer from "../assets/blog posts/covid-thoughts/la-summer.png";
import BoozeCruise from "../assets/blog posts/covid-thoughts/booze-cruise-2.jpg";
import Family from "../assets/blog posts/covid-thoughts/phamily.jpg";
import Friends from "../assets/blog posts/covid-thoughts/friends.jpg";
import Claire from "../assets/blog posts/covid-thoughts/claire.jpg";
import Helen from "../assets/blog posts/covid-thoughts/helen.jpg";
import Michelle from "../assets/blog posts/covid-thoughts/michelle.jpg";



export default class CovidThoughts extends PureComponent {
    render() {
      return (
        <div className="blog-post">
          <Container>
            <Row>
              <Navigation/>
            </Row>
            <Row className="content fadeInUp-animation">
                <BlogHeader date="June 24th, 2023" title="Scattered thoughts from a social distanced girly~" subtitle="Oops, I got COVID again!" image="https://64.media.tumblr.com/d6aafbc80e39537c22f1c86b793c3738/tumblr_mzjm0uDFBA1s3x8rko1_500.gif" altText="Studio Ghibli Scenary"/>
                <div className="body">
                  <div className="section">
                    <Photo image={Covid} subtitle="Currently missing the free UW COVID tests :/" altText="Positive COVID Test" isVertical={true} />
                    <p>
                      Who would’ve thought I would get covid again! Luckily, my symptoms are really mild and similar to getting the common cold (shoutout to the booster).
                    </p>
                    <p>
                      It’s currently day 5 of my quarantine, and all I got to say is wow I’ve never been so productive with work. I recently realized that my perfectionism and my short attention span combined results in me to take a longer time to get shit done (but always with a lot of intentional effort).
                    </p>
                  </div>
                  <div className="section">
                    <p>
                      Its officially summer here in LA, 70 degree weather and sun! Not going to lie, 70% of my memories here living in LA has been with overcast/rainy weather. It was very confusing as I’d assume LA was consistent high 60s degree, sunny weather? No, I was wrong. As the weather has been picking up, I’ve never felt so empowered to go outside and take on LA! Although “adult summers” aren’t as relaxing compared to my summers during university, the concept of summer really motivates you to go outside and reminds yourself to enjoy life as well.
                    </p>
                    <Photo image={Summer} subtitle="Social distanced outing in Santa Monica" altText="Santa Monica" isVertical={false} />
                  </div>
                  <div className="section">
                    <p>
                      Last week, I was in Seattle to attend a conference through work. I had such a blast as I reunited with friends/family and got a taste of Seattle summer. Being back in Seattle after it’s been officially a year since graduation made me realize how much can change in a year. I think past me would’ve been sad to see the people who were once such a prominent presence in my life exit out my life/move on while I still clung on the past. Present me however, looks back on the past fondly but now develops feelings of excitement having the opportunity to embrace the new as well.                    
                    </p>
                    <Photo image={BoozeCruise} subtitle="Booze Cruise in Seattle, hosted by Nicole" altText="Booze Cruise in Seattle" isVertical={false} />
                    <Photo image={Family} subtitle="Family Dinner in Ballard" altText="Family Dinner in Ballard" isVertical={false} />
                  </div>
                  <div className="section">
                    <p>
                      The past few years, I’ve been on this long journey of healing and personal development, which honestly maybe started as early as 2020. I mean after going through tumultuous years of breakups, friendships fallouts, starting over multiple times, along with the self-criticism, my confidence and self esteem has taken a punch.                     
                    </p>
                    <Photo image={Michelle} subtitle="Malibu, 07/04" altText="Michelle" isVertical={false} />
                    <p>
                      However, at this point, I can confidently say that … I’ve never felt so secure. Why did it take so long? Well, honestly, I realized in the past I’ve always relied on others for validation. Whether it was past partners to make me feel worthy of love and community to being invited to social gatherings. On the other hand, I started to practice the three most important things as a 20 something year old person should know: 1) how to not give a fuck 2) learning to let go and 3) surrounding yourself with good people.                     
                    </p>
                  </div>
                  <div className="section">
                    <p>
                      Also, It’s been officially 9 months since moving to LA, and honestly … I’m really glad I moved here. This recent shift in my feelings for the city has been because of the sense of community I’ve been feeling here. To reiterate what I learned from living in SF, the people make the place. However, I will say the process has taken much longer (9 months in LA vs 1.5 months in SF) to reach this point, but hey good things come with patience!                    
                    </p>
                    <Photo image={Friends} subtitle="A successful friend merge/night outing" altText="Friends" isVertical={false} />
                    <Photo image={Helen} subtitle="Malibu, 07/04" altText="Helen and Michelle" isVertical={false} />
                    <Photo image={Claire} subtitle="Future roomie <3" altText="Claire and Michelle" isVertical={false} />
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