
const Experience = () => {

    const experiences=[
        { 
        year:"2021-2022",
        company:"Alusoft Technologies",

        role:"Frontend Instructor",
        description:"Taught html,css and javascript",
        technologies:["html", "css", "js"]
        },
        { year:"2021-2022",
            company:"Alusoft Technologies",

        role:"Frontend Instructor",
        description:"Taught html,css and javascript",
        technologies:["html", "css", "js"]
        },
        { year:"2021-2022",
            role:"Frontend Instructor",
            company:"Alusoft Technologies",
            description:"Taught html,css and javascript",
            technologies:["html", "css", "js"]
        },
        { year:"2021-2022",
            role:"Frontend Instructor",
            company:"Alusoft Technologies",

            description:"Taught html,css and javascript",
            technologies:["html", "css", "js"]
            },
         
        { year:"2021-2022",
                role:"Frontend Instructor",
            company:"Alusoft Technologies",

                description:"lorem ipsum dolor sit amet, consectetur adip",
                technologies:["html", "css", "js"]
        },

    ]
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">Experience</h1>
        <div>
            {experiences.map((experience,index)=>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                     <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                      <h6 className="mb-2 font-semibold">
                        {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>

                      </h6>
                      <p className="mb-4 text-neutral-400">{experience.description}</p>
                         {experience.technologies.map((tech,index)=>(
                            <span className="mr-2 mt-4 rounded bg-neutral-900 text-sm  py-1 px-2 font-medium text-purple-800 " key={index}>
                                {tech}
                            </span>
                         ))}
                    </div>

                </div>

            ))}
          

        </div>


    </div>
  )
}

export default Experience