import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import BestBooks from './Components/BestBooks/BestBooks'
import Banner from './Components/Banner/Banner'
import AppStore from './Components/AppStore/AppStore'
import TopBooks from './Components/TopBooks/TopBooks'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PopUp from './Components/PopUp/PopUp'

const App = () => {

  const [orderPopUp,setOrderPopUp] = useState(true)

  const handleOrderPopUp = () =>{
    setOrderPopUp(!orderPopUp)
  }

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
    AOS.refresh()
  },[])

  return (
    <div className='dark:bg-gray-700 bg-gray-50 min-h-[100vh]'>
      <Navbar handleOrderPopUp={handleOrderPopUp}/>
      <Hero handleOrderPopUp={handleOrderPopUp}/>
      <BestBooks handleOrderPopUp={handleOrderPopUp}/>
      <Banner/>
      <AppStore/>
      <TopBooks/>
      <Testimonial/>
      <Footer/>
      <PopUp handleOrderPopUp={handleOrderPopUp} orderPopUp={orderPopUp}/>
    </div>
  )
}

export default App
