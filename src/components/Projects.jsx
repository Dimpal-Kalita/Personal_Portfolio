import React from 'react'

//images
import Ecell from '../assets/EcellEJS.png'
import Portfolio from '../assets/Portfoliotest.png'
import ToDo from '../assets/ToDoList.png'
import Reactlogo  from '../assets/React-logo.webp';
import Cpplogo from '../assets/Cpplogo.png';
import Gitlogo from '../assets/Gitlogo.png';
import Tailwindlogo from '../assets/Tailwindlogo.png';

// icons
import {AiOutlineGithub} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg';


function Projects() {
  return (
    // I have to fix this
      <div name='projects' className='w-full p-2 px-4 bg-white'>
        <h1 className='text-3xl mb-2 py-[2em] font-bold text-[#174033] text-center'>Projects I've recently worked in</h1>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

        {/* Card-1 */}
       <div className='w-full shadow-xl mb-5 flex flex-col px-[13%] my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-60 mx-auto mt-[-3rem] bg-white' src={Ecell} alt="/project logo"  />
              <div className='my-2 font-serif'>
                 <p className='font-bold'>Ecell Webpage</p>
                 <div className='flex flex-row'>
                 <p className='font-bold'>Techstack Used: </p>
                 <p>EJS, React, CSS</p>
                 </div>
                 <p>The Website was initially built with simple HTML CSS JS only, So there was too much redudancy in the code base,made the codease much cleaner and readable with the help of Express JS.</p>
                 <p>Currently working to recreate the webpage using React JS</p>         
              </div>
              <div className='flex'>
                <a href="https://github.com/Dimpal-Kalita/e-cell-website-22" target="_blank" rel='noreferrer' className='mx-auto'>
                  <button className='flex justify-center bg-[#00df9a] hover:bg-[#223939] hover:text-white rounded-md font-medium my-6 mx-auto px-6 py-3'><AiOutlineGithub className='my-1 mx-1'></AiOutlineGithub> Github</button>
                </a>

                <a href="https://ecellnits.in/" target="_blank" rel='noreferrer' className='mx-auto'>
                 <button className='flex justify-center bg-[#00df9a] hover:bg-[#223939] hover:text-white rounded-md font-medium my-6 mx-auto px-6 py-3'><CgWebsite className='my-1 mx-1' ></CgWebsite> Demo</button>
                </a>
              </div> 
        </div>

        {/* card-2 */}
        <div className='w-full shadow-xl mb-5 flex flex-col px-[13%] my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-60 mx-auto mt-[-3rem] bg-white' src={Portfolio} alt="/project logo" />
              <div className='my-2 font-serif'>
                 <p className='font-bold'>Personal Portfolio </p>
                 <div className='flex flex-row'>
                 <p className='font-bold'>Techstack Used: </p>
                 <p>React JS, Tailwind css </p>
                 </div>
                  <p>Created a responsive personal portfolio website using React JS and Tailwind CSS to get used to different library's and hooks used in React JS and the classes used in tailwind CSS</p>
              </div>

              <div className='flex pt-[4.5rem]'>
                <a href="https://github.com/Dimpal-Kalita/Personal_Portfolio" target="_blank" rel='noreferrer' className='mx-auto'>
                 <button className='flex justify-center bg-[#00df9a] hover:bg-[#223939] hover:text-white rounded-md font-medium my-6 mx-auto px-6 py-3'><AiOutlineGithub className='my-1 mx-1'></AiOutlineGithub> Github</button>
                </a>
                  
                <a href="https://github.com/Dimpal-Kalita/Personal_Portfolio" target="_blank" rel='noreferrer' className='mx-auto'>
                  <button className='flex justify-center bg-[#00df9a] hover:bg-[#223939] hover:text-white rounded-md font-medium my-6 mx-auto px-6 py-3'><CgWebsite className='my-1 mx-1' ></CgWebsite> Demo</button>
                </a>
              </div> 
        </div>
        
        {/* card-3 */}
        <div className='w-full shadow-xl mb-5 flex flex-col px-[13%] my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-60 mx-auto mt-[-3rem] bg-white' src={ToDo} alt="/project logo" />              
              <div className='my-2 font-serif'>
                 <p className='font-bold'>To-Do List</p>
                 <div className='flex flex-row'>
                 <p className='font-bold'>Techstack Used: </p>
                 <p>React JS, Tailwind css </p>
                 </div>
                  <p>Created a responsive To-Do List website using React JS and Tailwind CSS to get used to different library's and hooks used in React JS and the classes used in tailwind CSS</p>
              </div>
                              

              <div className='flex pt-[4.5rem]'>
                <a href='https://github.com/Dimpal-Kalita/ToDo-List' target="_blank" rel="noreferrer" className='mx-auto'>
                  <button className='flex justify-center bg-[#00df9a] hover:bg-[#223939] hover:text-white rounded-md font-medium my-6 mx-auto px-6 py-3'><AiOutlineGithub className='my-1 mx-1'></AiOutlineGithub> Github</button>
                </a>
                <a href="https://dimpal-kalita.github.io/ToDo-List/" target="_blank" rel='noreferrer' className='mx-auto'>
                  <button className='flex justify-center bg-[#00df9a] hover:bg-[#223939] hover:text-white rounded-md font-medium my-6 mx-auto px-6 py-3'><CgWebsite className='my-1 mx-1' ></CgWebsite> Demo</button>
                </a>
              </div> 
        </div>   
       
       </div>
        {/* Skill */}
        <h1 className='text-3xl mb- py-[2em] font-bold text-[#174033] text-center'>Skills</h1>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 font-serif'>
          <div className='cpp  w-full shadow-xl mb-5 flex flex-col px-[13%] my-4 rounded-lg hover:scale-105 duration-300'>
              <div className='flex justify-center font-bold heading border-b-2 py-2'>
                <img src={Cpplogo} alt="Cpplogo" className='w-6 mx-2' />
                C++
              </div>
              <div className='skill about py-3'>
               Know basic C/C++ programming. Used for contest programming and problem solving.
              </div>
          </div>
          {/* second skill */}
         <div className='cpp  w-full shadow-xl mb-5 flex flex-col px-[13%] my-4 rounded-lg hover:scale-105 duration-300'>
              <div className='flex justify-center font-bold heading border-b-2 py-2'>
              <img src={Reactlogo} alt="reactlogo" className='w-6 mx-2' />
                React
              </div>
              <div className='skill about py-3'>
               Worked on many projects using React. Know the basics of React.
              </div>
          </div>
          {/* Third skill */}
        <div className='cpp  w-full shadow-xl mb-5 flex flex-col px-[13%] my-4 rounded-lg hover:scale-105 duration-300'>
              <div className='flex justify-center font-bold heading border-b-2 py-2'>
                <img src={Gitlogo} alt="Gitlogo" className='w-6 mx-2' />
                Git
              </div>
              <div className='skill about py-3'>
                Experienced with git-based development. Mostly, use Github..
              </div>
          </div>
         {/* fourths kill */}
         <div className='cpp  w-full shadow-xl mb-5 flex flex-col px-[13%] my-4 rounded-lg hover:scale-105 duration-300'>
              <div className='flex justify-center font-bold heading border-b-2 py-2'>
              <img src={Tailwindlogo} alt="Tailwindlogo" className='w-6 mx-2 h-4 mt-1' />
                Tailwind
              </div>
              <div className='skill about py-3'>
                Used Tailwind CSS for styling my projects. Know the basics of Tailwind.
              </div>  
          </div>
       
       </div>      
    </div>
  )
}

export default Projects
