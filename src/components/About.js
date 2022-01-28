import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Lewis.
            <br className="hidden lg:inline-block" />A self-motivated and goal-oriented Software Engineer who focuses on delivering results.
          </h1>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-cont-green border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-btn-blue border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="md:max-w-md lg:w-full md:w-1/2 w-5/6">
          <img src="/LewisProPic.JPG" alt="..." class="drop-shadow-lg bg-cont-green rounded-full max-w-full h-auto align-middle border border-cont-green" />
        </div>
      </div>
    </section>
  );
}


export default About;