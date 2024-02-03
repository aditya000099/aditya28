// import './App.css'

// function App() {

//   return (
//     <>
//     <div className='html-head'>
//     <h1 className="scroll-m-40 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'<html>'}</h1>
//     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color ps-6 mt-4">{'<head>'}</h1>
//     </div>
//     <div className='html-title ps-80 mt-40 mb-40'>
//     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'<title> '}</h1>
//     <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">aditya3.eth</h1>
//     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl mt-4">Aditya Aggarwal</h1>
//     <h1 className="scroll-m-20 text-4xl font tracking-tight lg:text-2xl mt-8 text-gray-700">developer</h1>
//     <h1 className="scroll-m-20 text-4xl font tracking-tight lg:text-2xl mt-8 text-gray-700">frontend developer</h1>
//     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'</title>'}</h1>
//     </div>
//     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color ps-6">{'</head>'}</h1>
//     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color ps-4">{'<body>'}</h1>
//     <div className='html-title ps-80 mt-40 mb-40'>
//     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'<div class="skills"> '}</h1>
//     <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">Web Tech</h1>
//     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl mt-4">HTML</h1>
//     <h1 className="scroll-m-20 text-4xl font tracking-tight lg:text-2xl mt-8 text-gray-700">excellent</h1>
//     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'</div>'}</h1>
//     </div>
//     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color ps-4">{'</body>'}</h1>
//     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'</html>'}</h1>
  
//   </>
//   )
// }

// export default App




// import React, { useEffect, useRef } from 'react';
// import './App.css';
// import ScrollMagic from 'scrollmagic';
// import gsap from 'gsap';

// function App() {
//   const controller = new ScrollMagic.Controller();
//   const developerHeader = useRef(null);

//   useEffect(() => {
//     // Create a scene for the frontend developer reveal
//     const scene = new ScrollMagic.Scene({
//       triggerElement: developerHeader.current,
//       triggerHook: 0.8 // Adjust starting position if needed
//     })
//       .setPin(developerHeader.current)
//       .addTo(controller);

//     gsap.fromTo(developerHeader.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out" });
//   }, []);

//   return (
//     <>
//      <div className='html-head'>
//      <h1 className="scroll-m-40 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'<html>'}</h1>
//      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color ps-6 mt-4">{'<head>'}</h1>
//      </div>
//      <div className='html-title ps-80 mt-40 mb-40'>
//      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'<title> '}</h1>
//      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">aditya3.eth</h1>
//      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl mt-4">Aditya Aggarwal</h1>
//     <h1 className="scroll-m-20 text-4xl font tracking-tight lg:text-2xl mt-8 text-gray-700" ref={developerHeader}>
//       developer
//     </h1>
//     <h1 className="scroll-m-20 text-4xl font tracking-tight lg:text-2xl mt-8 text-gray-700">
//       frontend developer
//     </h1>
//         <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'</title>'}</h1>
//    </div>
//      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color ps-6">{'</head>'}</h1>
//      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color ps-4">{'<body>'}</h1>
//      <div className='html-title ps-80 mt-40 mb-40'>
//      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'<div class="skills"> '}</h1>
//      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">Web Tech</h1>
//      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl mt-4">HTML</h1>
//      <h1 className="scroll-m-20 text-4xl font tracking-tight lg:text-2xl mt-8 text-gray-700">excellent</h1>
//      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'</div>'}</h1>
//      </div>
//      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color ps-4">{'</body>'}</h1>
//      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'</html>'}</h1>
  
//       </>

//   );
// }

// export default App;








import { useEffect } from 'react';
import './App.css';
// import ScrollMagic from 'scrollmagic';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';

function App() {

  useEffect(() => {
  const skills = gsap.utils.toArray('.roles');
  const tl = gsap.timeline({repeat: -1});
  skills.forEach(skill =>{
    const splitSkill = new SplitTextJS(skill);
    tl.from(splitSkill.chars, {
      opacity: 0,
      y: 20,
      rotateX: -90,
      stagger: 0.02,
      // duration: 2,
      // ease: "power2.out"
    }, "<")
    .to(splitSkill.chars, {
      opacity: 0,
      y: -20,
      rotateX: 90,
      stagger: 0.005
      // duration: 1,
      // ease: "power2.out"
    }, "<1")
  })
}
  )
  return (
    <>
     <div className='html-head'>
     <h1 className="scroll-m-40 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'<html>'}</h1>
     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color ps-6 mt-4">{'<head>'}</h1>
     </div>
     <div className='html-title ps-80 mt-40 mb-40'>
     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'<title> '}</h1>
     <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">aditya3.eth</h1>
     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl mt-4">Aditya Aggarwal</h1>
     <div className="rolesBox mt-4">
     <div className='roles'>
    <h1 className="scroll-m-20 text-4xl font tracking-tight lg:text-2xl mt-8 text-gray-700" >
      developer
    </h1>
    </div>
     <div className='roles'>
    <h1 className="scroll-m-20 text-4xl font tracking-tight lg:text-2xl mt-8 text-gray-700" >
      frontend developer
    </h1>
    </div>
     <div className='roles'>
    <h1 className="scroll-m-20 text-4xl font tracking-tight lg:text-2xl mt-8 text-gray-700" >
      backend developer
    </h1>
    </div>
    </div>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color mt-12">{'</title>'}</h1>
   </div>
     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color ps-6">{'</head>'}</h1>
     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color ps-4">{'<body>'}</h1>
     <div className='html-title ps-80 mt-40 mb-40'>
     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'<div class="skills"> '}</h1>
     <div className="skills">
      <div className="singleSkill">
     <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">Web Tech</h1>
     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl mt-4">HTML</h1>
     <h1 className="scroll-m-20 text-4xl font tracking-tight lg:text-2xl mt-8 text-gray-700">excellent</h1>
     </div>
      <div className="singleSkill">
     <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">App Tech</h1>
     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl mt-4">Flutter</h1>
     <h1 className="scroll-m-20 text-4xl font tracking-tight lg:text-2xl mt-8 text-gray-700">excellent</h1>
     </div>
      <div className="singleSkill">
     <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">Blockchain</h1>
     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl mt-4">Solidity</h1>
     <h1 className="scroll-m-20 text-4xl font tracking-tight lg:text-2xl mt-8 text-gray-700">excellent</h1>
     </div>
     </div>
     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'</div>'}</h1>
     </div>
     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color ps-4">{'</body>'}</h1>
     <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-2xl portfolio-color">{'</html>'}</h1>
  
    </>
  );
}

export default App;
