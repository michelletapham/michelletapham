import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from "../components/Navigation";
import BlogHeader from "../components/BlogHeader";
import Photo from "../components/Photo";
import Video from "../components/Video";
import Quote from "../components/Quote";

import Sunset from "../assets/blog posts/two-years-single/sunset.mov";
import Simp from "../assets/blog posts/two-years-single/simp.jpg";


import Footer from "../components/Footer";

export default class Pilot extends PureComponent {
    render() {
        var quote = "I believe that guilt is adaptive and helpful—it’s holding something we’ve done or failed to do up against our values and feeling psychological discomfort.I define shame as the intensely painful feeling or experience of believing that we are flawed and therefore unworthy of love and belonging—something we’ve experienced, done, or failed to do makes us unworthy of connection. I don’t believe shame is helpful or productive. In fact, I think shame is much more likely to be the source of destructive, hurtful behavior than the solution or cure."
        return (
            <div className="blog-post">
            <Container>
                <Row>
                <Navigation/>
                </Row>
                <Row className="content fadeInUp-animation">
                    <BlogHeader date="May 20th, 2023" title="Happy Two Year Anniversary .. of Being Single" subtitle="and i lowkey still hate all men to this day" image="https://64.media.tumblr.com/tumblr_lq4121Tc5x1qehmh1o1_500.gif" altText="Ocean Waves - Studio Ghibli"/>
                    <div className="body">
                        <div className="section">
                            <p>
                                When it comes to my dating life, I’m either 0 or 100. Either I’m so chronically single that all men ick 
                                me out and simping over celebrities and fictional men will keep me entertained. Or I’m so uncomfortable of 
                                being alone that I need to have some sort of love interest to fill the void. 
                            </p>
                            <Photo image={Simp} subtitle="my list of (unattainable) boys i'd simp for" altText="boys i'd simp for" isVertical={true} />
                            <p>
                                At this current moment, I’m leaning towards a 0. I’ve tried the dating apps (surprisingly I’ve found Seattle Hinge >>> LA Hinge), 
                                but the inorganic nature of online dating is automatically a turn off for me. I love the idea of meeting someone organically. Not going to lie, 
                                I will find a guy 2x more attractive if I met them IRL vs through a dating app. I love the chase, being able to see how they interact in a social setting, 
                                the slow transition from friends to something more, or being able to analyze every interaction I’ve had with them.
                            </p>
                            <p>
                                Honestly, I prefer being single rather than being in a relationship. Relationships are messy! 
                                Why put yourself through something knowing you’re going to end up hurt. Knowing myself, 
                                it’ll take me over a year for me to get over someone. I truly don't have the time to go through that again at the moment. 
                            </p>
                        </div>
                        <div className="section">
                            <p>
                                To celebrate these past two two years of growth, inner peace, and independence, here are the core lessons 
                                I’ve learned as I navigate being single.
                            </p>

                            <ol>
                                <li>
                                    <b>Before you enter a relationship, ask yourself the following:</b>
                                    <ul>
                                        <li>Do you have any emotional baggage or insecurities you haven’t addressed yet?</li>
                                        <li>Do you feel confident in your support system? If you guys were to break up do you know exactly who you can go to for support?</li>
                                        <li>Are you completely content being alone at this very moment?</li>
                                    </ul>
                                </li>
                                <li>
                                    <b>A relationship should supplement not fulfill your life. </b>
                                </li>
                                <li>
                                    <b>Are you going through any major life changes?</b>
                                    <ul>
                                        <li>
                                            For example, did you move to a new city? Did you just get out a relationship? If yes, maybe spend
                                            time adjusting and settling into this new change before jumping into something new.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <b>If you’re actively upset during your fling/situationship … just leave it!</b>
                                    <ul>
                                        <li>
                                            I don’t care if y’all have a few weeks left or since it’s casual it’s not that deep (yes i'm lecturing past me). 
                                            If you’re upset over it, it’s means something to you. It’s not worth the energy, more power to you honestly!
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <b>Being single has it perks as well!</b>
                                    <ul>
                                        <li>
                                            More time for friendships, discovering new hobbies, eating healthier, more inclination to take risks,
                                            saving lots of $$$, and lastly the ~breakup glowup~.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                        <hr/>
                        <div className="section">
                            <h3>Dear 2021 Michelle</h3>
                            <p>
                                It's cliché, but time truly heals all wounds. It's going to take some time and trial and error, but it'll be worth it at the end (I mean, look at where we are right now)! 
                                Try your best to not be so hard on yourself for the sake of others. Just know that past you didn't know any better back then.  You're mistakening feelings of guilt with feelings of shame instead.
                            </p>
                            <Quote quote={quote} author={"Brene Brown"}/>
                            <br/>
                            <p> 
                                Make sure to take care of yourself, surround yourself with good people, and give yourself permission to enjoy life too.
                            </p>
                            <Video video={Sunset} subtitle={"admiring the sunset during my run :)"} isVertical={true}/>
                            <p>love,</p>
                            <p>you from the present</p>
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