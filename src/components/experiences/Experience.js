import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Experience = ({title,info}) => {
  const [readMore, setReadMore] = useState(false)

  
  return <article >
    <header class='flex items-start mb-4'>
      <h4 className='sm:text-1xl text-2xl font-thin title-font text-white mb-1'>{title}</h4>
      <button  onClick={()=>setReadMore(!readMore)} className='absolute top -10 right-10 '>
        {readMore ? <AiOutlineMinus /> : <AiOutlinePlus/>}
      </button>
    </header>
    <p>{readMore && info}</p>
    <hr />

  </article>
};

export default Experience;
