import Header from '../../components/shared/Header/Header'
import Footer from '../../components/shared/Footer/Footer'
import { Outlet } from 'react-router'

export default function Root() {
  return (
    <div>
        <Header/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
