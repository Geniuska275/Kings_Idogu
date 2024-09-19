import {motion} from "framer-motion"
import image2 from "./ki.jpeg";
export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center  text-4xl">About 
            <span className="text-neutral-500 ml-3">Me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:0.5}}
            
            className="w-full lg:w-1/2 lg:p-8">
              <div className="flex items-center justify-center">
                <img className="w-[300px] rounded-2xl " src={image2}/>
              </div>
            </motion.div>
              <motion.div 
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:100}}
               transition={{duration:0.5}}
               
              className="w-full lg:w-1/2">
                  <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">
                    Hi, I’m Kingsley Aigbojie, a passionate frontend developer with over 3 years of experience building responsive, visually appealing, and user-friendly websites.
                     My expertise lies in creating clean, efficient code and intuitive interfaces
                      that enhance user experience.
                        I’m deeply motivated by the challenge of turning complex designs into seamless
                        digital products.I also love team work and helping others to solve problems.
                        I specialize in HTML5, CSS3,TailwindCss,Typescript and JavaScript (ES6+), and I have extensive experience with modern frameworks like React and Nextjs.I also build mobile applications with React-Native (expo).
                      
                      </p>
                 </div>
              </motion.div>
            <div>

            </div>


        </div>


    </div>
  )
}
