import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="title">
        <h5 className="h5">So you want to travel to</h5>
        <h1 className="h1">space</h1>
      </div>
      <p className="p">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <span className="enter-span">
        <h4 className="h4">Explore</h4>
      </span>
    </section>
  );
};

export default Home;
