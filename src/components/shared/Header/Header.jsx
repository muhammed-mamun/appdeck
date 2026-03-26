import { Link } from 'react-router'
import logo from '../../../assets/logo.png'
import NavLink from './CustomNavLink'
import { FaGithub } from 'react-icons/fa'
import CustoomNavLink from './CustomNavLink'

const navigationData = [
  {
    name: "Home",
    path: '/',
    id: 1
  },
  {
    name: "Apps",
    path: '/apps',
    id: 2
  },
  {
    name: 'installation',
    path: '/installation',
    id: 3
  }
]

export default function Header() {
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {
              navigationData.map(route => <CustoomNavLink key={route.id} route={route} />)
            }
          </ul>
        </div>
        <Link to={'/'} className="flex items-center text-xl">
          <img className="w-10 h-10" src={logo} alt="logo" />
          <p className='font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text'>AppDeck</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            navigationData.map(route => <CustoomNavLink key={route.id} route={route} />)
          }
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn font-bold flex gap-1 p-6 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"> <FaGithub size={18} />
          Contribute</Link>
      </div>
    </div>
  )
}
