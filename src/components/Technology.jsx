import { RiReactjsLine } from "react-icons/ri"
import { RiHtml5Line } from "react-icons/ri"
import { RiCss3Line } from "react-icons/ri"
import { RiJavascriptLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";



const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="items-center flex flex-wrap justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <RiHtml5Line className="text-7xl text-orange-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <RiCss3Line className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <RiTailwindCssFill  className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <RiJavascriptLine className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <SiTypescript className="text-7xl text-yellow-300"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <RiReactjsLine className="text-7xl text-cyan-300"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <TbBrandNextjs className="text-7xl "/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
               <TbBrandReactNative  className="text-7xl text-cyan-400"/>
            </div>

        </div>

    </div>
  )
}

export default Technology