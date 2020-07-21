import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../files/profile_pic_crop.JPG';

const Home = (props) => {
  return (
    <div className="about">
      <h1>Welcome!</h1>
      <img alt="Andrew Davisson" className="profile-pic" src={pic} rounded fluid />
      <p>I am a Full Stack Engineer with 5 years of experience as a Systems Administrator in various industries. I have a passion for learning new technologies and staying up to date with the latest trends in Software Development. I have experience working on highly collaborative teams, and I value effective communication. I welcome unique and challenging problems, and I enjoy finding ways to automate tasks and processes.</p>
      <p>I am currently working on projects that are built with a variety of technologies and frameworks, including: ReactJS, NodeJS, GraphQL, Apollo, and React-Native. Check out my <Link className='home-links' to='/resume'>Resume</Link> and <Link className='home-links' to='/projects'>Projects</Link> page to learn more about me and what I am working on.</p>
      <p>A little more about me, I grew up in South Carolina and went to Clemson University (Go Tigers!). After graduating with a degree in Computer Information Systems, I landed a job in Charleston, SC and lived there for several years. While I really enjoyed living there, I decided that I would like to live somewhere with more than zero mountains. So, I made the move to Denver in the Summer of 2017 and I am thoroughly enjoying it. My hobbies include golf, snowboarding, hiking, weightlifting, and more recently I have been trying to get into photography.</p>
    </div>
  );
} 
 
export default Home;