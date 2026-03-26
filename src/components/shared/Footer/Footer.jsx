import { Link } from 'react-router'
import logo from '../../../assets/logo.png'
import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci'
export default function Footer() {
  return (
    <div className='px-20 py-4 bg-[#001931]'>
      <div className='flex justify-between'>
        <Link to={'/'} className="flex items-center text-xl">
          <img className="w-10 h-10" src={logo} alt="logo" />
          <p className='font-bold text-white'>AppDeck</p>
        </Link>
        <div>
          <p className='font-semibold text-white'>Social Links</p>
          <div className='flex mr-6 text-white'>
            <CiLinkedin size={18}/>
            <CiTwitter size={18}/>
            <CiFacebook size={18}/>
          </div>
        </div>
      </div>
      <div className='w-full h-px bg-gray-50 my-px'></div>
      <p className='text-center text-white py-3'>Copyright © {new Date().getFullYear()} - All right reserved</p>
      
    </div>
  )
}
