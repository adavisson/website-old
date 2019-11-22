import React from 'react';
import Image from 'react-bootstrap/Image'

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome!</h1>
      <Image src="https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" rounded fluid/>
      <p>Welcome, I am glad you are here! Please browse this site to learn more about me. I appreciate your patience while I continue to update and add to this website.</p>
    </div>
  );
}
 
export default Home;