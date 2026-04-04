import React from 'react'
import HeroImg from '../assets/heroImg.avif';

const Hero = () => {
  return (
    <section className='w-[80vw] mx-auto flex justify-between items-center min-h-screen'>
       <div className="">
        <h1 className='text-xl font-bold text-purple-600'>Effortless</h1>
        <h2 className='text-6xl font-semibold capitalize my-4'>car rentals</h2>
        <p className='text-gray-600 text-xl'>Experience the best car rental services at your fingertips. </p>
        <button className='bg-purple-600 text-white py-2 px-4 rounded mt-4'>Get Started</button>
       </div>
       <div className="">
         <img src={HeroImg} alt="Car Rental" className='h-auto w-150 object-cover' />
       </div>
    </section>
  )
}

export default Hero