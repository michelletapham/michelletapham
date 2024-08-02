import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from "../components/Navigation";
import BlogHeader from "../components/BlogHeader";
import Footer from "../components/Footer";

export default class FarewellTo2023 extends PureComponent {
    render() {
      return (
        <div className="blog-post">
          <Container>
            <Row>
              <Navigation/>
            </Row>
            <Row className="content fadeInUp-animation">
                <BlogHeader date="December 2023" title="farewell to 2023" image="https://64.media.tumblr.com/61eef18fa1e69ad15e97ea1c00236243/93e5a36d93cb40c8-61/s540x810/89ef20fea77618a448f4b1cf5bb50f57c2ff4e00.gif" altText="Studio Ghibli Scenary"/>
                <div className="body">
                  <div className="section">
                    <p>2023 flew by so quick, yet so much has happened. If I were to explain to January Michelle everything that has happened the past 12 months, she would’ve been so shocked. All the new characters in my life, my life in la now, my shifting thoughts/views on things. The first half of 2023 was embracing all the major changes in my life and going through trial and error to find the people/places that made me uplifted. The second half of it was embracing the benefits going through these changes provided me. With any big change, you need to go through the bad to reach the good :)
                    </p>
                  </div>
                  <div className="section">
                    <p>
                    I feel like I’ve grown a lot this year. Nothing too major, but just becoming better in the areas that I’ve been trying to work on. Learning to let go, resolving conflict through open conversation, and embracing uncertainty/change.            
                    </p>
                  </div>
                  <div className="section">
                    <p>
                    The first half consisted of trying to navigate the transition into post-grad. Making friends, trying to merge friends together, and get by each day at work. Funny enough, out of those friends I tried to make, only few are truly relevant in my life. I was still holding onto my old life back in Seattle, and had trouble to let go of the “what-ifs” that I held back here. Any opportunity I could get to come back to Seattle, I took it. Weekends were quiet. Weekdays consisted of work, going to the gym, shower, scroll on social media, sleep, and repeat                    
                    </p>
                  </div>
                  <div className="section">
                    <p>
                    The second half felt like freshman year of college again. Becoming friends with a lot of people, and filtering through them to narrow down to the people I really clicked with again. Packed weekend plans. Making weekend plans already on Mondays. Group chats and inside jokes. Making future trip plans with friends. Life is good.                    
                    </p>
                  </div>
                  <div className="section">
                    <p>
                    Although I didn’t get through any of my new years resolution, I feel like I’ve gained a lot this past year. This is what adulting is truly like. The fun/excitement of life doesn’t end at college. There’s so much to explore in my 20s. Cities to live in, people to meet and learn about, new experiences that’ll push me to become a better person.    
                    </p>
                  </div>
                  <div className="section">
                    <p>
                    The main takeaways from this year is that:
                    </p>
                    <ol>
                        <li>With every big change, there’s always the initial period that sucks, but over time the good from the change will come out</li>
                        <li>Instead of fearing the things that come with that risks, ask yourself what pain do you want to experience. TLDR: sometimes you need to take that risk, even it means putting yourself in pain in the future.</li>
                        <li>I want to live a fruitful life. Filled with new experiences, meeting people that pushes/uplifts me, trying new things, giving back.</li>
                    </ol>
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