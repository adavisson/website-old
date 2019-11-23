import React from 'react';
import Image from 'react-bootstrap/Image'

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome!</h1>
      <Image src="https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" rounded fluid/>
      <p>Welcome, I am glad you are here! Please browse this site to learn more about me, and feel free to reach out and contact me if you have any questions.</p>
    </div>
  );
}
 
export default Home;