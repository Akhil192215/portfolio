const About = () => {
  return (
    <div
      data-name="about"
      className="w-full  h-screen bg-gradient-to-b from-black via-[black] to-yellow-950"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" text-[#f2ab45] text-4xl font-bold border-b-4 inline border-secondary    ">
            About
          </p>
        </div>
        <div className="text-secondary text-xl">
          <p className="mt-8">
            I'm an experienced MERN stack web developer with a robust skill set
            and a passion for solving problems. With expertise in MongoDB, Node
            js, Express js, React., Postman, AWS (EC2, R-53), Git and GitHub,
            Rest API, JWT, Chakra UI, HTML, and CSS, I have developed
            interactive user interfaces with responsive designs and custom admin
            panels.
          </p>
          <br />

          <p>
            I have worked on various projects, including Coders House, a code
            collaboration app for programmers, and CakeShop, an e-commerce site
            for selling cakes. My projects showcase proficiency in API
            integrations, user authorization and authentication, and deployment
            on AWS. I additionally, contributed to projects like Netflix Trailer
            App, which involved API integration and displaying movies
            dynamically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
