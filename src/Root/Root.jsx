import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { Helmet } from 'react-helmet-async'

const Root = () => {
  // style={{
  //   backgroundImage: "url(https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
  // }}
  return (
    <div  className='bg-no-repeat bg-cover'>
      <Helmet>
        <title>Auth Recap | Home</title>
      </Helmet>
        <Header/>
        <div className='min-h-[80vh]'>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Root