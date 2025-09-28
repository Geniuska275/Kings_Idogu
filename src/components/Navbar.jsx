
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
// import { FaSquareXTwitter } from 'react-icons/fa'
// import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from "react-icons/fa";


function Navbar() {
  return (
    <nav className='mb-20  flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center '>
            <h1 className='font-bold text-2xl mx-2 w-10 '>Kings_Idogu</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href='https://uk.linkedin.com/in/kings-idogu-8bb7b715b'>
            <FaLinkedin/>
            
            </a>
            <a href='https://github.com/Kingswithkings'>
          <FaGithub/>
            </a>
          {/* <FaSquareXTwitter/> */}
          <a href="https://wa.me/+447398460844">

          <FaWhatsapp/>
          </a>
        </div>
    </nav>
  )
}

export default Navbar