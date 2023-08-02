
import Batman from '../assets/Batman2.png'
import {HiArrowNarrowRight} from 'react-icons/hi'
function Home() {
  return (
    <div
 
    className="w-full h-screen bg-black"
  >
    <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold  text-[#f2ab45]">
          I'm a Full Stack Developer
        </h2>
        <p className=" text-[#888888] py-4 max-w-md">
        I am Akhil S Poovathinkal, a passionate full-stack developer
         with a focus on web application development. My expertise lies in working with 
         technologies such as React, Tailwind, Express, and MongoDB
         for software design and implementation.
        </p>
        <div>
        
      
            <span className="group-hover:rotate-90 duration-100">
              {/* <HiArrowNarrowRight className="ml-1" /> */}
            </span>
     
        </div>
        <div>
        <button
          
              className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-l from-[#ccac69] to-[#f2ab45] cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
              
              <HiArrowNarrowRight className="ml-1" />
              </span>
            </button>
        </div>
      </div>
      <div>
        <img
          src={Batman}
          alt="my profile"
          className="rounded-5xl mx-auto w-2/3 md:w-full "
        />
      </div>
    </div>
  </div>
  )
}

export default Home