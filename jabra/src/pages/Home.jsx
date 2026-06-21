import React from 'react'
import Hero from '../component/Hero';
import Rating from '../component/Rating';
import HomeServices from '../component/HomeServices';
import People from '../component/People';
import Process from '../component/Process';

const Home = () => {
  return (
   <section>
     <Hero />
     <Rating />
     <HomeServices />
     <People />
     <Process />
   </section>
  )
}

export default Home;