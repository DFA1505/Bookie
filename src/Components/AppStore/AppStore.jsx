import React from 'react'
import bannerImage from '../../assets/AppStore/ImagemLivros.png'
import AppStoreImg from '../../assets/AppStore/AppStore.png'
import PlayStoreImg from '../../assets/AppStore/PlayStore.png'

const bannerImg = {
    backgroundImage:`url(${bannerImage})`,
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    width:'100%',
    height:'100%'
}

const AppStore = () => {
  return (
    <div className='text-white py-10' style={bannerImg}>
      <div className="container">
        <div>
            <h1 className='text-2xl text-center sm:text-4xl font-semibold'>Read Books in Your Own Phone</h1>
        </div>
        <div className=' md:flex justify-center gap-32 place-items-center'>
            <img src={AppStoreImg} alt="" className='w-[300px] h bg' />
            <img src={PlayStoreImg} alt="" className='w-[300px]' />
        </div>
      </div>
    </div>
  )
}

export default AppStore
