import React from "react";

const Contact = () => {
  return (
    <div name="contact" className='w-full  h-screen bg-gradient-to-b from-black via-[black] to-yellow-950'>
      <div className="flex flex-col justify-center max-w-screen p-4 h-full ">
        <div className=" pb-8">
          <p className=" text-[#f2ab45] text-4xl font-bold border-b-4 inline border-secondary  ">Contact</p>
          <p className="py-6 text-secondary">Submit the form below to get in touch with me</p>
        </div>
        <div className=" flex justify-center items-center">
          <form action="https://getform.io/f/0239f404-5775-4306-9dc5-b31bedda0ddc" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-secondary focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 my-4  rounded-md text-secondary focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-secondary focus:outline-none"
            ></textarea>
<div>
    
<button className="text-black w-fit px-6 py-3 my-2 mx-auto flex items-center rounded-md bg-gradient-to-l from-[#ccac69] to-[#f2ab45]">
              Let's talk
            </button>
</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
