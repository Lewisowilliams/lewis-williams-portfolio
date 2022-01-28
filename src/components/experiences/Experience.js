import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Experience = ({title,info}) => {
  const [readMore, setReadMore] = useState(false)

  
  return <article >
    <header class='flex items-start mb-4 relavite'>
      <h3 className='sm:text-1xl text-2xl font-thin title-font text-white mb-1 mr-3 '>{title}</h3>

        <button  onClick={()=>setReadMore(!readMore)} className='mt-2'>
          {readMore ? <AiOutlineMinus className='text-cont-green' /> : <AiOutlinePlus className='text-cont-green'/>}
        </button>

    </header>
    <p>{readMore && info}</p>
    <a href='./Lewis Williams CV.pdf' target='_blank'>{title==='CV' && readMore &&'Click to view my CV'}</a>
    <hr />

  </article>
};
 
export default Experience;
