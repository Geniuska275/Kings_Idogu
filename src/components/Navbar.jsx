
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
// import { FaSquareXTwitter } from 'react-icons/fa'
// import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from "react-icons/fa";


function Navbar() {
  return (
    <nav className='mb-20  flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center '>
            <h1 className='font-bold text-2xl mx-2 w-10 '>KA</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href='https://www.linkedin.com/in/kingsley-aigbojie-775325209?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOCsSKC20Qw6j01XF29vZOg%3D%3D'>
            <FaLinkedin/>
            
            </a>
            <a href='https://github.com/Geniuska275'>
          <FaGithub/>
            </a>
          {/* <FaSquareXTwitter/> */}
          <a href="https://wa.me/+2349011192901">

          <FaWhatsapp/>
          </a>
        </div>
    </nav>
  )
}

export default Navbar