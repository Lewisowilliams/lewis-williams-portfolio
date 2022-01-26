import React, { useState } from 'react';
import pastExeperiences from './data';
import SingleExperience from './Experience';
import {FaBriefcase} from "react-icons/fa";

function Experiences() {
  
  const [pastExperiences, setQuestions] = useState(pastExeperiences)


  return <main id='experiences'>
    <div className="container px-5 py-10 mx-auto text-center">
      <FaBriefcase size={30} className="w-10 inline-block mb-4"/>
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">Experience</h1>
      <section >
        {
          pastExperiences.map((exe)=>{
            return <SingleExperience key={exe.id} {...exe}/>
          })
        }
      </section>
    </div>
  </main>;
}

export default Experiences;