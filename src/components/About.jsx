import React from "react";
import avatar from "../assets/Avatar.png";
// this is about page
function About() {
  return (
    <div name='about' className="w-full font-serif bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[400px] mx-auto my-4' src={avatar} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className="text-[#00df9a] font-bold">Know Who I'M</p>
           <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 "> Hello,</h1>
            <p>
              I am a sophomore pursuing my B.Tech in Computer Science & Engineering (CSE) from the National Institute of Technology, Silchar. 
            </p>
            <p>  
              I have combinedly solved 600+ questions across various coding platforms like Atcoder, Codeforces,Codechef. I regularly participate in various coding contests and have been able to secure a rank in the top 1000 in various contests.
            </p>
            <p>
              I would describe myself as a hard-working and passionate individual and would love to utilise my technical and problem-solving skills for my self-growth as well as for the growth of the community.
            </p>
          {/* <button className='bg-black flex justify-center w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Resume<BiLinkExternal className='mx-1 my-1'></BiLinkExternal> </button> */}
        <div className='flex justify-center my-2 mt-6'>
              <img alt="codeforces" src="https://cp-logo.vercel.app/codeforces/_Dimpal_" className='mx-1 h-4 md:h-6'/>
              <img alt="codechef" src="https://img.shields.io/badge/codechef-2013-yellow" className='mx-1 h-4 md:h-6'/>
              <img alt="atcoder" src="https://cp-logo.vercel.app/atcoder/dk_sensei" className='mx-1 h-4 md:h-6'/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;
