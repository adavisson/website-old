import React from 'react';
import { Image } from 'react-bootstrap';
import pic from '../files/profile_pic_crop.JPG';

const Home = () => {
  return (
    <div className="about">
      <h1>Welcome!</h1>
      <Image className="profile-pic" src={pic} rounded fluid />
      <p>I am full stack web developer living in  Denver, Colorado. I have spent the last 5 years of my career working as a Systems Administrator and I found myself really enjoying the automation and scripting pieces of my job. I recently decided to make the transition from systems administration to web development, and I am loving every step of the journey. If you would like to see more about my skills and experience then please check out my <a href="/resume">Resume</a>.</p>
      <p>A little more about me, I grew up in South Carolina and went to Clemson University (Go Tigers!). After graduating with a degree in Computer Information Systems, I landed a job in Charleston, SC and lived there for several years. While I really enjoyed living there, I decided that I would like to live somewhere with more than zero mountains. So, I made the move to Denver in the Summer of 2017 and I am thoroughly enjoying it. My hobbies include golf, snowboarding, hiking, weightlifting, and more recently I have been trying to get into photography.</p>
    </div>
  );
}
 
export default Home;