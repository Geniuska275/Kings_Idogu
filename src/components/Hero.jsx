
import { motion } from "framer-motion"
import image1 from "./kingspro.jpeg";
import resume from "../assets/kingsresume.pdf"


const container=(delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{x:0,opacity:1,
    transition:{duration:0.5, delay:delay}
  },

})
const handleDownload = () => {
    // Create a temporary anchor element and trigger download
    const link = document.createElement('a');
    link.href = '/kingsresume.pdf'; // File in public folder
    link.download = 'kings_Idogu_Resume.pdf'; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className=" flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-center lg:items-start">
                <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                
                className="pb-16 text-6xl  font-thin tracking-tight  lg:mt-16 lg:text-8xl">KINGS IDOGU
                </motion.h1>
                < motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                 className="bg-gradient-to-r from-pink-300  via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight 
                text-transparent"> AI  Engineer</motion.span>
                <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible" 
                 className="my-2 max-w-xl py-6 font-light tracking-tighter">

                   I am a diligent, enthusiastic, creative, and skilled Artificial Intelligence (AI) software engineer with 4+ years of
experience building commercial applications. I have worked on innovative and cutting-edge business solutions
that span different fields while ensuring 98% on-time project completion. My extensive testing skills ensure I
build software that is less prone to bugs and downtime, and my excellent debugging skills ensure I can
recover the system from downtime in record time. I am a fast learner with a strong academic background
and a challenge-orientated problem solver. I am also a resourceful team player, a natural leader, and a great
communicator.
</motion.p>

                <a  href={resume} 
              download="Kings_Idogu.pdf"
                className="border border-white bg-transparent py-3 px-4 rounded-lg font-bold"
              >
                Download Cv
                </a>
                {/* <button  onClick={handleDownload} 
                className="border border-white bg-transparent py-3 px-4 rounded-lg font-bold"
                > Download Cv</button> */}
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
             <div className="flex justify-center">
                <motion.img 
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1.2}}

                className="w-[300px] h-[300px] mt-10 rounded-full object-fit"
                src={image1}/>
             </div>

            </div>
        </div>
    </div>
  )
}
