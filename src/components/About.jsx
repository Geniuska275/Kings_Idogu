import {motion} from "framer-motion"

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
                <img className="w-[300px] rounded-2xl " src="https://images.unsplash.com/photo-1607294846590-fd005d7973e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"/>
              </div>
            </motion.div>
              <motion.div 
               whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:100}}
               transition={{duration:0.5}}
               
              className="w-full lg:w-1/2">
                  <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est numquam assumenda temporibus? Magni quo totam, accusamus porro nostrum ex rem labore autem dolores ea qui vel natus nisi necessitatibus!</p>
                 </div>
              </motion.div>
            <div>

            </div>


        </div>


    </div>
  )
}
