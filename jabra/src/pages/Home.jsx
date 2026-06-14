import React from 'react'
import Hero from '../component/Hero';
import Rating from '../component/Rating';
import HomeServices from '../component/HomeServices';
import People from '../component/People';

const Home = () => {
  return (
   <section>
     <Hero />
     <Rating />
     <HomeServices />
     <People />
   </section>
  )
}

export default Home;