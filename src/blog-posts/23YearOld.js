import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from "../components/Navigation";
import BlogHeader from "../components/BlogHeader";
import Footer from "../components/Footer";
import Photo from "../components/Photo";
import Birthday from "../assets/blog posts/23-years-old/birthday.jpeg";


export default class TwentyThreeYearsOld extends PureComponent {
    render() {
      return (
        <div className="blog-post">
          <Container>
            <Row>
              <Navigation/>
            </Row>
            <Row className="content fadeInUp-animation">
                <BlogHeader date="August 11th, 2023" title="23 & me" subtitle="23 years, 23 lessons" image="https://i.pinimg.com/originals/92/3b/45/923b4501db395231f0e022628901f9a9.gif" altText="Studio Ghibli Scenary"/>
                <div className="body">
                  <div className="section">
                    <p>When birthdays hits diff due to the lack of milestones as an adult :0</p>
                  </div>
                  <div className="section">
                    <p>
                        Last year, I would’ve thought 23 years old seems so old, but after a year of being an ~actual~ adult, I’ve realized I’m still so young and have so much life ahead of me.                    
                    </p>
                  </div>
                  <div className="section">
                    <p>
                    Some words to describe the past year being 22? Unbothered, change, happy, adapting, … rebuilding? The past year has been one of the more peaceful years I’ve had in recent years. Mainly because of the following:
                    </p>
                    <ol>
                      <li>Having autonomy to surround myself with people that energized me rather than left me in doubt.</li>
                      <li>Letting go of past situations, people, and insecurities I held for so long.</li>
                      <li>Learning to not over-read situations … cause it’s really not that deep</li>
                      <li>Focusing on my relationships with my friends/family over romantic. Because relationships are ~messy~</li>
                      <li>Giving myself permission to enjoy life and not letting feelings of guilt + anxiety hold me back</li>
                    </ol>
                  </div>
                  <div className="section">
                    <p>
                      In classic Michelle manner, to commemorate this day, here are some (lowkey mundane) learnings/realizations I’ve had the past year:
                    </p>
                    <ol>
                          <li>As you get older, your social circle is going to get smaller, but you realize you’re going to feel the most fulfilled/most at peace from the 2-3 close friends you have currently than the many proximity friends you had.</li>
                          <li>Trust your gut feeling. No need to question. If you are questioning, it’s usually an implicit ‘no’ or ‘don’t do it’.</li>
                          <li>Good things comes with patience.</li>
                          <li>The recipe to deepen a new friendship is to 1) be vulnerable (meaning you sometimes gotta overshare) 2) have shared experiences and 3) patience</li>
                          <li>People are going to be busy, but that doesn’t excuse them for not putting in effort. Friendships should be a two way street.  </li>
                          <li>Just because there’s a long wait at a popular restaurant, doesn’t mean it’s going to be worth it all the time. Especially if that means dealing with hangry people.</li>
                          <li>Drinking less alcohol + dairy will do wonders on your skin/reduce face bloating.</li>
                          <li>Some people are truly head empty. Sometimes you gotta not overthink their actions/words.</li>
                          <li>Overcoming your fears starts with you taking that risk first.</li>
                          <li>Living close to my family my entire life up to now was something I took for granted. The time I have with family is more precious than ever.</li>
                          <li>Being away from all of my friends, there’s a heartwarming thrill of reuniting with your long distance friends.</li>
                          <li>Any city can feel like home as long as you have community</li>
                          <li>Even if on paper it looks they have their life together, everyone lowkey doesn’t really know what they’re doing with their life and are still figuring it out.</li>
                          <li>Everyone has their insecurities/traumas so sometimes you gotta realize people have layers behind their behaviors.</li>
                          <li>Sometime there doesn’t need to be a elaborate reason why people part ways, sometimes people simply change and outgrow each other.</li>
                          <li>Time really does heal all wounds. </li>
                          <li>Life is too short to hold grudges or make space for petty drama</li>
                          <li>Don’t hesitate to reach out/shoot your shot with someone (i.e friend, tennis partner, romantic prospect). You never know, something good can come out of it :)</li>
                          <li>To attain a peaceful life you need to be at peace with yourself.</li>
                          <li>The world is small, everyone is connected to each other somehow. </li>
                          <li>Weather plays such a huge factor on people’s attitude/behaviors (yes I’m calling out Seattle freeze)</li>
                          <li>The feeling after bringing people together and them getting along well is … priceless</li>
                          <li>It’s crazy how a small decision can change the trajectory of your life.</li>
                      </ol>
                  </div>
                  <Photo image={Birthday} subtitle="Birthday Dinner with Friends, Los Angeles" altText="23rd Birthday Dinner" isVertical={false} />
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