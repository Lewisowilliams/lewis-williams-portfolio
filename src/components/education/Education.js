import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight, FaGraduationCap } from 'react-icons/fa'
import educationData from './data'



// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function Education() {
 
  const [education, setEducation] = useState([educationData])
  const [value, setValue] = useState(0)

  const tabs = ['Masters','Bacherlors', 'A-Levels & GCSEs']
  console.log(education);





  const {id,name,location,dates,text} = educationData[value]
  console.log(id);
  console.log(name);
  console.log(location);
  console.log(dates);
  console.log(text);
  return (
    <section className="container px-5 py-10 mx-auto text-center">
      <FaGraduationCap size={30} className="w-10 inline-block mb-4" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
      Education
      </h1>
      <div className='flex items-stretch'>
        <div className='flex flex-col justify- mb-16 flex-wrap pr-4 space-y-4 space-x-2'>
          {
            tabs.map((item,index)=>{
              return <button  key={item} onClick={()=> 
                setValue(index)} className={`job-btn ${index=== value && 'active-btn'}`}>
                {item}
              </button>
            })
          }
        </div>
        <article className='w-1/1 '>
          <h2 className="sm:text-1xl  text-3xl font-thin title-font text-white mb-2">{name}</h2>
          <h4 className="sm:text-1xl text-2xl font-thin title-font text-white mb-1">{location}</h4>
          <p className="sm:text-1xl text-1xl font-thin title-font text-white mb-1">{dates}</p>
          {text.map((note, index)=>{
            return <div className='flex items-stretch mb-4 space-x-2 justify-center '>
              <FaAngleDoubleRight />
              <p>{note}</p>
            </div>
          })}
        </article>
      </div>
    </section>
  )
}

export default Education
