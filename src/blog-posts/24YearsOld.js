import React, { PureComponent } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from "../components/Navigation";
import BlogHeader from "../components/BlogHeader";
import Footer from "../components/Footer";
import Photo from "../components/Photo";
import Birthday1 from "../assets/blog posts/24-years-old/bday_1.jpg";
import Birthday2 from "../assets/blog posts/24-years-old/bday_2.jpg";
import Birthday3 from "../assets/blog posts/24-years-old/bday_3.jpg";
import Birthday4 from "../assets/blog posts/24-years-old/bday_4.jpg";
import Birthday5 from "../assets/blog posts/24-years-old/bday_5.jpg";
import Birthday6 from "../assets/blog posts/24-years-old/bday_6.jpg";
import Birthday7 from "../assets/blog posts/24-years-old/bday_7.jpeg";

export default class TwentyFourYearsOld extends PureComponent {
    render() {
      return (
        <div className="blog-post">
          <Container>
            <Row>
              <Navigation/>
            </Row>
            <Row className="content fadeInUp-animation">
                <BlogHeader date="August 11th, 2024" title="I turned 24!" subtitle="and still in my early 20s" image="https://images.gr-assets.com/hostedimages/1490628172ra/22328701.gif" altText="Studio Ghibli Scenary"/>
                <div className="body">
                  <div className="section">
                    <p>Today, I turn 24! I don’t care what anyone says, I consider 24 as your early 20s. </p>
                    <Photo image={Birthday1} subtitle="Birthday Picnic with Friends, Santa Monica" altText="24rd Birthday" isVertical={true} />
                    <p>For my birthday this year, I kept it pretty wholesome yet eventful. A week before my birthday, my friends had surprised me with a picnic. My family was in town during that time, and it was their last evening in LA. For some reason, my brother was urging to go on a post-dinner walk at the Palisades Park in Santa Monica. I was complaining to him because we had been there before and there were better spots I wanted my parents to see, but he would not budge. At the same time, my friend Kenta suggested to play spikeball in Santa Monica, which I told him I wasn’t able to make as I wanted to spend time with family. However, when we arrived there, it seemed that my brother was in the loop and helping me get to the surprise birthday celebration my friends had planned. </p>
                    <Photo image={Birthday7} subtitle="PR'd in the 10 mile!" altText="Birthday Run" isVertical={true} />
                    <p>To kick off the start my second half-marathon training, I decided to run 11 miles for my bday day (August 11th) from Playa Del Rey all the way to Hermosa Beach. </p>
                    <p>For my actual birthday, my friends surprised me with a day trip to Santa Barbara where we got wine drunk at the wineries and enjoyed a brief getaway from LA.</p>
                  </div>
                  <div className="section">
                    <Photo image={Birthday2} altText="Fashion" isVertical={true} />
                    <p>This year was when I began to put in more effort in my fashion and appearance. Has LA gotten to me? Maybe a bit. Growing up with hand me downs from my older sisters, I’m just now finding my personal style.  Living in LA has encouraged me to dress up at any occasion and to experiment what styles work with me. Every time I go in the office, especially when I’m visiting Seattle, I love dressing up because unironically I like to defy the software engineer stereotypes and in hopes to be someone’s work crush. I’m still in the process of experimenting what I like, but I’ve become more mindful of what clothes I buy, valuing something that will last longer/fits with my personal style vs what’s trendy at the moment. Some notable things I’ve incorporated includes wearing sunglasses (a must in socal), wearing perfume, and experimenting with different textiles.</p>
                  </div>
                  <div className="section">
                    <Photo image={Birthday3} subtitle="Wanted to decorate our work pod with polaroids of the team!" altText="Co-Workers" isVertical={false} />
                    <p>A recent development has been my relationship with work! I was looking at old journal entries and it’s crazy to read back that one of my work stressors at the time was feeling like I wasn’t contributing enough to the team and feeling more of a burden than an asset because of my limited knowledge. Now a year later, I’m on the opposite side where people are depending on me and I have more to handle on my plate.</p>
                    <p>Although I wouldn’t say I know everything, I’ve grown more comfortable and confident taking on  my day to day work and now able to teach and help others. My relationship with work has its up and down, but one thing that has stayed constant has been my good relationships with my co-workers. It’s now a bit weird being on the other side where I’m mentoring others and I’m not the baby new grad anymore. </p>
                  </div>
                  <div className="section">
                    <Photo image={Birthday4} subtitle="OC Half Marathon, May 2024" altText="Half Marathon" isVertical={true} />
                    <p>This was the year I became more mindful/proactive taking care of my health. Over the years, I’ve grown more uncomfortable and sluggish in my body. With college, came along natural weight gain that came from my poor diet and drinking alcohol. Unfortunately, I don’t have the metabolism I once had as a teenager. Although I would consider myself active, my diet was shit. Honestly, the past few years, I haven’t felt super comfortable in my body and looks. Maybe the SoCal asian beauty standards had gotten to me? Who knows. </p>
                    <p>So… I decided to do something about it. As of May, I’ve been actively on a fitness journey, mainly with the goals to get stronger, feel comfortable in my own body, and help me improve in my tennis and running. I know it’s a touchy subject, and most people are like ‘you don’t need to lose weight Michelle’. But also, I have one body for my entire life, frankly why not be hot, strong, and confident in it?</p>
                  </div>
                  <div className="section">
                    <Photo image={Birthday5} subtitle="The struggles of modern dating" altText="Text Message" isVertical={false} />
                    <p>I’ve also become less of a man hater this year (i’m joking .. unless?). For the first time in years, I felt ready to enter a relationship again. I for once felt secure with my life, myself, and my communities. However, dating in your 20s is hard. Everyone is at a different point of their lives, and there’s more ambiguity in what the future looks like. However, I learned to embrace the ambiguity. Life is too short to be waiting for the right time. If you like someone, shouldn’t that be enough? Unfortunately … the stars weren’t aligned for me this year. But that’s okay, because I rather be single then settle. Though, what I’ve learned this past year is that 1) I am capable to having genuine feelings for someone 2) to never assume where the other person is at, always be upfront with your intentions and 3) I’m over casual dating, let me simp (and have it reciprocated) </p>
                  </div>
                  <div className="section">
                    <p>A core learning of mine this year is to embrace the uncertainty of an outcome that comes with taking a risk. Of recent years, I’ve grown to be more guarded, making decisions out of fear. Fear of being hurt, wrong, or being judged by others. This only lead me to hold myself back. My mindset began to shift when I heard a snippet from a podcast. It went something along the lines of: </p>
                    <p>Instead of asking yourself “what do I want in life?”, ask yourself “what pain do I want to experience?”. Meaning, from those low moments you faced in your life, recognize and appreciate the learnings and growth you’ve experienced from it that are now fundamental to who you are today. </p>
                  </div>
                  <div className="section">
                    <Photo image={Birthday6} subtitle="Thank you to my lovely friends who made my birthday so special this year" altText="Friends" isVertical={false} />
                    <p>23 was a great year. Cheers to another year of new adventures and growth!</p>
                    <p>love,</p>
                    <p>mich</p>
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