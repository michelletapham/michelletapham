import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from "../components/Navigation";
import BlogHeader from "../components/BlogHeader";
import Footer from "../components/Footer";

export default class GuideToNotPeakInCollege extends PureComponent {
    render() {
      return (
        <div className="blog-post">
          <Container>
            <Row>
              <Navigation/>
            </Row>
            <Row className="content fadeInUp-animation">
                <BlogHeader date="June 2023" title="michelle’s unofficial guide to *not* peak in college and enjoy life post-grad" subtitle="as someone that took an entire year to finally feel settled with this change" image="https://img.buzzfeed.com/buzzfeed-static/static/2017-08/22/11/asset/buzzfeed-prod-fastlane-02/anigif_sub-buzz-9124-1503414015-3.gif" altText="Studio Ghibli Scenary"/>
                <div className="body">
                  <div className="section">
                    <p>Honestly, compared to my peers, I’ll admit I’ve had a harder time adjusting to life post-college. I mean, it took me 9 months to accept that I wasn’t in college anymore and a year to feel settled with this new lifestyle change.</p>
                  </div>
                  <div className="section">
                    <p>
                    There was a brief moment where I really believed I peaked in college. I mean as someone who sought out validation from performing well academically, my high involvement with extracurriculars, and leadership positions from elementary school to college, it’s natural not to feel a bit empty inside when that suddenly becomes irrelevant. On top of that, my biggest red flag is that I’m SUPER nostalgic. Meaning, I’ll reminisce on the past frequently and it takes me a long time to accept and let go of past things. Moving to LA knowing no one didn’t help either. That’s for a different blog post though.                 
                    </p>
                  </div>
                  <div className="section">
                    <p>
                    In honor of being out of college for over a year, here are some lessons (and hard truths) i’ve learned the past year:
                    </p>
                    <ol>
                        <li>Accept that your social circle from college is going to change (and shrink… a lot). A lot of the friends you made were of convenience. But that’s just life, people change and grow.</li>
                        <li>Quality over quantity of friends. You’re going to feel more fulfilled with those two friends who you just click with than a big friend group of acquaintances.</li>
                        <li>Post-grad is your opportunity to rebrand and showcase this better version of yourself! One thing I wasn’t a fan of in college was people having this perception of me based on what happened in the past which wasn’t reflective of present me. Now when I meet new people, they have no context of who I once was, so I can present a more confident/authentic version of myself.</li>
                        <li>Invest in your health! Especially in LA, I’m not blessed with Seattle walkability along with having to sitting at a desk 9-5. I try to make sure to exercise regularly and eat healthier </li>
                        <li>Revisit some of your old hobbies! I’m so happy I picked up lots of hobbies in my childhood, because some of them allows me to stay active and meet people :) I’ve met people through bouldering and tennis and it’s honestly how I stay sane during the work week.</li>
                        <li>Cut yourself some slack if you don’t have this adulting thing on lock. It’s going to take some trial and error and some patience. No need to compare your timeline with other people.</li>
                        <li>What you put in is what you receive. This is mainly applicable to friendships. Don’t wait for others to reach out, make the first move! It will pay off in the long run.</li>
                        <li>But also recognize when things feel one sided. There’s been potential friendships where instead of initiating (and them being really busy), I waited to hear from them. Because of that I had some friendships in LA fizzle out. It sucks, but it saves you a lot of time and energy. Friendships should be a two way street.</li>
                        <li>Make time to continue to learn outside of work: learning new recipes, reading, meeting new people and learning from their experiences! Learning shouldn’t be exclusively within your 9-5.</li>
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