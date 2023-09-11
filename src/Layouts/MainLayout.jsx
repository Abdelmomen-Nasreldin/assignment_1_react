import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
    <Header />
    <Outlet className="h-full"/>
    <Footer />
    </>
  )
}

export default MainLayout