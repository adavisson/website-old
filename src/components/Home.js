import React from 'react';
import Image from 'react-bootstrap/Image'

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome!</h1>
      <Image src="https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" fluid/>
      <p>Welcome, I am glad you are here! Please browse this site to learn more about me. I also appreciate your patience while this site is under maintenance.</p>
    </div>
  );
}
 
export default Home;