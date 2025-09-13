import {motion} from "framer-motion"
import image2 from "./kingspro.jpeg";
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
                   I’m Kings Uthana Idogu, a dedicated AI and Machine Learning Engineer and Software Engineer with strong expertise in backend development. With a passion for solving complex problems through data-driven intelligence, I specialize in designing and deploying scalable AI models, intelligent systems, and robust backend architectures that power modern applications.

My experience spans across Python, TensorFlow, PyTorch, and Scikit-learn for building and training AI/ML models, as well as cloud-based deployments that ensure scalability and real-time performance. On the backend side, I work extensively with C#, Dotnet, Django, and FastAPI, building secure, reliable, and high-performance APIs and microservices.

I thrive at the intersection of AI innovation and software engineering, whether it’s creating predictive models, developing intelligent chatbots, or architecting backend systems that integrate seamlessly with frontend applications. Collaboration and problem-solving are at the heart of my approach, and I enjoy working with diverse teams to transform ideas into impactful solutions.

Beyond engineering, I’m passionate about exploring how AI can transform industries, from healthcare and finance to education and everyday life, while staying aligned with ethical and sustainable technology practices.</p>

                 </div>
              </motion.div>
            <div>

            </div>


        </div>


    </div>
  )
}
