import React from 'react';
import { Image } from 'react-bootstrap';
import pic from '../files/profile_pic_crop.JPG';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <Image className="profile-pic" src={pic} fluid />
      <p>I am full stack web developer living in  Denver Colorado. I have spent the last 5 years of my career working as a Systems Administrator and I found myself really enjoying the automation and scripting pieces of my job. I recently decided to make the transition from systems administration to web development, and I am loving every step of the journey. If you would like to see more about my sills and experience then check out my <a href="/resume">Resume</a>.</p>
      <p>A little more about me, I grew up in South Carolina and went to Clemson University (Go Tigers!). After graduating with a degree in Computer Information Systems, I landed a job in Charleston, SC and lived there for several years. While I really enjoyed living there, I am not very much of a beach person and decided to move to someplace with mountains. So, I made the move to Denver in the summer of 2017 and I am thoroughly enjoying it. My hobbies include golf, snowboarding, hiking, weightlifting, and more recently I have been trying to get into photography.</p>
    </div>
  );
}
 
export default About;