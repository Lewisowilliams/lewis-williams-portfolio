import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { BsFillEmojiHeartEyesFill, BsFillEmojiLaughingFill,  BsFillEmojiSmileFill, BsFillEmojiNeutralFill } from "react-icons/bs";
import React from "react";
import { languages } from "../data";

const Languages = () => {
  
     return (
    <section id="languages">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 text-cont-green" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Programming Languages
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 ">
          {languages.map((language) => {
            const {lang, level} = language;
            return (
            <div key={lang} className="p-2 sm:w-1/2 w-full">
              <div className="bg-cont-green rounded flex p-4 h-full items-center">
                {level==="High" && <BsFillEmojiHeartEyesFill className="text-green-600 w-6 h-6 flex-shrink-0 mr-4" />}
                {level==="Medium" && <BsFillEmojiLaughingFill className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />}
                {level==="Low" && <BsFillEmojiSmileFill className="text-green-200 w-6 h-6 flex-shrink-0 mr-4" />}
                <span className="title-font font-medium text-white">
                  {lang}
                </span>
              </div>
            </div>
            )
          })}
        </div>
        
      </div>

    </section>
  );  
}

export default Languages;