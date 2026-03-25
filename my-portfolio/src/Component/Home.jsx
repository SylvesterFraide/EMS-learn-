import React from 'react'
import { ThemeToggle } from './ThemeToggle';
import { Navbar } from './Navbar';
import { HeroSection } from './HeroSection';
import {AboutSection } from './AboutSection';
import { SkillsSection } from './SkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { ContactSection } from './ContactSection';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <ThemeToggle />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <ToastContainer />
    </div>
  )
}

// 1
// function Sum(num1, num2 = num1) {
//   console.log(num1 + num2);
// }

// Sum(10, 30);

// Let's break it down:

// function Sum(num1, num2 = num1): This defines a function Sum with two parameters, 
// num1 and num2. The num2 = num1 part is a default parameter, which means if num2 is
//  not provided when calling the function, it will default to the value of num1.
// Sum(10, 30): Here, you're calling the Sum function with two arguments, 10 and 30.
// Since num2 is explicitly provided (30), the default value (num1) is ignored.
// Inside the function, num1 is 10 and num2 is 30, so num1 + num2 becomes 10 + 30, which equals 40.
// console.log(40) outputs 40 to the console.
// So, the output is 40.

// Now, if you called the function like this: Sum(10), then num2 would default to num1 (10), 
// and the output would be 20 (10 + 10).


// 2
// let num = 10;

// const Func = () => {
//   console.log(num);
//   let num = 20;
// }

// Func();

//  Actually, it throws a ReferenceError 😊.

// When console.log(num) is executed, the local num is in the "temporal dead zone" (TDZ) because it's declared with let but not yet initialized.

// Accessing a let or const variable in the TDZ throws a ReferenceError.

// So, the correct output is:

// ReferenceError: Cannot access 'num' before initialization

export default Home;