import { Link } from 'react-router'
import ErrorImg from '../../assets/error-404.png'
import Header from '../../components/shared/Header/Header'
import Footer from '../../components/shared/Footer/Footer'
export default function ErrorPage() {

  return (
   <>
   <Header/>
    <div className='py-10 min-h-[48vh]'>
     <div className='flex flex-col justify-center items-center space-y-6'>
       <img src={ErrorImg} alt="Error 404 Image" />
       <div className='text-center space-y-6'>
          <p className='text-gray-800 text-3xl text-center font-semibold'>Oops Page not found!</p>
          <p className='text-gray-400 text-center'>The page you are looking for is not available</p>
          <Link to={-1} className='text-white bg-linear-to-br from-[#632EE3] to-[#9F62F2] px-6 btn'>Go back</Link>
       </div>
     </div>
    </div>
    <Footer/>
   </>

  )
}
