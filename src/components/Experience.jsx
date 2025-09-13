import {motion} from "framer-motion"
const Experience = () => {

    const experiences=[
            { year:" September 2024-January 2025",
              company:"NORTHUMBRIA UNIVERSITY – LONDON ENGLAND",
              role:" Student",
               description:" ",
               technologies:["Natural Language Processing", 
                "Generative AI",
                "Convolutional Neural Network",
                "Machine Learning",
                 "Deep Learning",
                 "Robotics",
                
                ]
              },
               { 
               year:" April 2022- july 2024",
               company:"Dev Carrier Africa – Lagos",

               role:"Software Developer / Backend Team Lead",
               description:"",
               technologies:[".Net","C#","Github"]
               },
              {  
             year:"January 2020- February 2022",
            role:"Software Developer",
            company:"SEVEN UP BOTTLING COMPANY LAGOS",
           
               technologies:[".Net","C#","Github"]
            
           },
           { year:" August 2019- January 2020",
            role:"Software Developer",
            company:"Conclase Academy ",
            // description:"Developed and maintained web applications using Nodejs and PostgreSQL for clients in e-commerce and healthcare, ensuring robust functionality. ",
            technologies:["C#", ".Net", "MySql" ,"Github"]
            },

            { year:"2018-  2019",
            role:"Software Developer",
            company:"Ist Kings International ",
            // description:"Developed and maintained web applications using Nodejs and PostgreSQL for clients in e-commerce and healthcare, ensuring robust functionality. ",
            technologies:["C#", ".Net", "MySql" ,"Github"]
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