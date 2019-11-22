import React from 'react';
import { Image } from 'react-bootstrap';
import pic from '../files/profile_pic_crop.JPG';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <Image className="profile-pic" src={pic} fluid />
    </div>
  );
}
 
export default About;