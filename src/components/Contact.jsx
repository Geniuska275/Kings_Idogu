import {motion} from "framer-motion"
const Contact = () => {
    const contact={
        address:"Lagos,Nigeria",
        phone:"09011192901",
        email:"aigbojie2020@gmail.com"

    }
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}

        className="my-10 text-center text-4xl ">Get in Touch</motion.h1>
        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}

            className="my-4 ">
              {contact.address}</motion.p>
            <motion.p 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:100}}
             transition={{duration:1}}
            className="my-4 underline ">
              {contact.phone}
              </motion.p>
            <a href="mailto:aigbojie2020@gmail.com" className=" border-b ">{contact.email}</a>

        </div>

    </div>
  )
}

export default Contact