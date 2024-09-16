import { RiReactjsLine } from "react-icons/ri"
import { RiHtml5Line } from "react-icons/ri"
import { RiCss3Line } from "react-icons/ri"
import { RiJavascriptLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import {motion} from "framer-motion"

const iconVariants=(duration)=>({
 initial:{y:-10},
 animate:{
   y:[10,-10],
   transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
   }
 }
})

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{
         opacity:1,
         y:0
        }}
        initial={{
         opacity:0,
         y:-100
        }} className="my-20 text-center text-4xl">Technologies</motion.h2>
        <div className="items-center flex flex-wrap justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.4)}
            initial="initial"
            animate="animate"

             className="rounded-2xl border-4 border-neutral-800 p-4">
               <RiHtml5Line className="text-7xl text-orange-400"/>
            </motion.div>
            <motion.div
             variants={iconVariants(2.6)}
             initial="initial"
             animate="animate"

            className="rounded-2xl border-4 border-neutral-800 p-4">
               <RiCss3Line className="text-7xl text-blue-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.8)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
               <RiTailwindCssFill  className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
               <RiJavascriptLine className="text-7xl text-yellow-400"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiTypescript className="text-7xl text-yellow-300"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.4)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
               <RiReactjsLine className="text-7xl text-cyan-300"/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.6)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
               <TbBrandNextjs className="text-7xl "/>
            </motion.div>
            <motion.div
            variants={iconVariants(3.8)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
               <TbBrandReactNative  className="text-7xl text-cyan-400"/>
            </motion.div>

        </div>

    </div>
  )
}

export default Technology