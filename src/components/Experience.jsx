import {motion} from "framer-motion"
const Experience = () => {

    const experiences=[
        { year:"2024-present",
                    company:"IT360academy",
        
                role:"Web Development Instructor.",
                description:"web instructor for html,css and javascript.",
                technologies:["html", "css", "javascript"]
                },
        { 
        year:"2023-present",
        company:"SQE HOLDINGS",

        role:"Frontend Developer (contract)",
        description:"Working Development team to build web applications",
        technologies:["Reactjs","Tailwindcss","Github"]
        },
        { year:"2023-2024",
            role:"Frontend Developer",
            company:"Viscio Express",
            description:"worked with other frontend developers to add new features to the website.",
            technologies:["Reactjs", "Tailwindss", "vercel","Github"]
        },
        { year:"2022-2023",
                role:"Frontend Instructor",
            company:"Alusoft Technologies",

                description:"Taught the students html ,css and javascript",
                        technologies:["html", "css", "javascript"]
        },
           { year:"2022-2023",
            role:"FullStack  Developer",
            company:"Darkel Microsystems",
            description:"Developed and maintained web applications using Nodejs and PostgreSQL for clients in e-commerce and healthcare, ensuring robust functionality. ",
            technologies:["Nodejs", "Reactjs", "PostgreSQL" ,"Github"]
            },
         

    ]
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:-100}}
           transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Experience</motion.h1>
        <div>
            {experiences.map((experience,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}

                    
                    className="w-full lg:w-1/4">
                     <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                    </motion.div>
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    
                    className="w-full max-w-xl lg:w-3/4">
                      <h6 className="mb-2 font-semibold">
                        {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>

                      </h6>
                      <p className="mb-4 text-neutral-400">{experience.description}</p>
                         {experience.technologies.map((tech,index)=>(
                            <span className="mr-2 mt-4 rounded bg-neutral-900 text-sm  py-1 px-2 font-medium text-purple-800 " key={index}>
                                {tech}
                            </span>
                         ))}
                    </motion.div>

                </div>

            ))}
          

        </div>


    </div>
  )
}

export default Experience