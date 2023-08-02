import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import typscript from '../assets/typescript.png'
import github from '../assets/github.png'


interface Tech {
    id: number;
    src: string;
    title: string;
    style: string;
  }
  
  const techs: Tech[] = [
      {
          id: 1,
          src: typscript,
          title: 'Typescript',
          style: 'shadow-blue-400',
        },
    {
      id: 2,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 3,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-900',
    },
    {
      id: 4,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 5,
      src: node,
      title: 'Node JS',
      style: 'shadow-green-400',
    },
    {
      id: 6,
      src: react,
      title: 'React',
      style: 'shadow-blue-600',
    },   
    {
      id: 8,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-blue-600',
    },
    {
      id: 9,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-400',
    },
  
  ];
  

const Experience = () => {
  return (
    <div className='w-full  h-screen bg-gradient-to-b from-yellow-950 via-[black] to-black'>
        <div  className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-secondary">
            <div>
                <p className=' text-[#f2ab45] text-4xl font-bold border-b-4 inline border-secondary  '>
                    Experience
                </p>
                <p className='py-6'>
                    These are the technologies i have worked with
                </p>
            </div>
           <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0'>
           {techs.map(({ id, src, title, style }) => (
        <div key={id} className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
          <img src={src} alt="" className="w-20 mx-auto" />
          <p className="mt-4">{title}</p>
        </div>
      ))}
        
           </div>
        </div>
    </div>
  )
}

export default Experience