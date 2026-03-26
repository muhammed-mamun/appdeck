import { Link } from 'react-router'
import logo from '../../../assets/logo.png'
import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci'
export default function Footer() {
  return (
  
      <footer className="lg:px-20 text-gray-100 px-10 footer bg-[#001931]  sm:footer-horizontal p-10">
        <div className='w-full'>
          <aside>
           <Link to={'/'} className="flex items-center text-xl">
            <img className="w-32 h-32 " src={logo} alt="logo" />
            <p className='font-bold'>AppDeck</p>
          </Link>
          <p className='text-2xl py-2'>
            AppDeck Technologies Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className='flex gap-4'>
          <a className="link link-hover"><CiLinkedin size={24} /></a>
          <a className="link link-hover"><CiTwitter size={24} /></a>
          <a className="link link-hover"><CiFacebook size={24} /></a>
          </div>
        </nav>
        </div>

      </footer>
  )
}
