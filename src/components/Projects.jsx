import {motion} from "framer-motion"

const Projects = () => {
   const projects=[
 
    { 
      title:"Swift Exchange",
      description:"An Informational website for Swift Exchange ",
      image:"https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      technologies:["Reactjs","Tailwindcss","Vercel"],
      projectlink:"https://www.swiftglobalex.com/ "
    },
    { 
      title:"SQE HOLDINGS",
      description:"A market application ",
      image:"https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      technologies:["Reactjs","Tailwindcss","Typescript"],
      projectlink:"https://sqe-market-app-51l3-fn4n8y53x-geniuska275.vercel.app/ "
  
    },
    { 
      title:"Viscio Express",
      description:"A logistic web application ",
      image:"https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      technologies:["Reactjs","Tailwindcss","Typescript"],
      projectlink:"https://www.viscio.com.ng/"
    },
    { 
      title:"E-commerce",
      description:"An e-commerce website ",
      image:"https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      technologies:["Reactjs","Tailwindcss","Typescript"]
    },
    { 
      title:"GreenFusion Energy",
      description:"An Information website for GreenFusion Energy ltd ",
      image:"https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      technologies:["Reactjs","Tailwindcss","Typescript"],
       projectlink:"https://www.greenfusion.enery"
    },
   ]
  return (
    <div className='border-b border-neutral-500 pb-4'>
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className="my-20 text-center text-4xl ">
        Projects</motion.h2>
      <div>
        {projects.map((project,index)=>(
          <div key={index} className="mb-8 flex flex-wrap  lg:justify-center ">
              <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1}}

              className="w-full lg:w-1/4">
              <img src={project.image}  alt={project.title} width={150} height={150} className="mb-6 rounded " />
              </motion.div>
              <motion.div
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:100}}
               transition={{duration:1}}

              
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech,index)=>(
                <span key={index} className="mr-2  bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  {tech}
                </span>
              ))}
              <a href={project.projectlink}>
                 <button className="mr-2  bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 hover:text-white">View</button>

                </a>
              </motion.div>

          </div>
        ))}
      </div>


    </div>
  )
}

export default Projects