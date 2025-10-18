import React, { useState } from 'react'
import Book1 from '../../assets/Hero/Livro1.png'
import Book2 from '../../assets/Hero/Livro2.png'
import Book3 from '../../assets/Hero/Livro3.png'

const ImageList = [
  {
    id:1,
    image:Book1,
    title:'The secrets of navigation',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptate. Ratione necessitatibus quis soluta voluptates repudiandae ut pariatur, officiis harum, consequatur odio impedit veniam inventore autem mollitia voluptate quae unde.',
    author:'Alexandre Costa'
  },
  {
    id:2,
    image:Book2,
    title:'Eldoria Chronicles',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptate. Ratione necessitatibus quis soluta voluptates repudiandae ut pariatur, officiis harum, consequatur odio impedit veniam inventore autem mollitia voluptate quae unde.',
    author:'Sofia Moraes'
  },
  {
    id:3,
    image:Book3,
    title:'Quantqic Coding: Simulated Reality',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptate. Ratione necessitatibus quis soluta voluptates repudiandae ut pariatur, officiis harum, consequatur odio impedit veniam inventore autem mollitia voluptate quae unde.',
    author:'Gabriel Mendes'
  },
]

const Hero = ({handleOrderPopUp}) => {

  const[bookId, setBookId] = useState(Book1)
  const[title,setTitle]= useState('The secrets of navigation')
  const[author,setAuthor]= useState('Alexandre Costa')
  return (
    <div className='min-h-[550px] sm:min-h-[650px] bg-gray-200 dark:bg-gray-950 flex justify-center items-center dark:text-white duration-200'>
      <div className="container pb-8 sm:pb-0">
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='flex flex-col justify-center gap-4 pt- sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
              <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold' data-aos='fade-right' data-aos-delay='100'>{title}
              </h1>
                <p className='bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-right text-sm' data-aos-delay='500' data-aos='fade-right'>{author}</p>
              <p className='text-sm' data-aos='fade-right' data-aos-delay='500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias in quis deleniti fugiat magni veniam, sint voluptas atque possimus eos magnam nulla. Rem unde exercitationem impedit culpa necessitatibus modi repudiandae?</p>
              <div>
                <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-500' data-aos='fade-right' data-aos-delay='900' onClick={handleOrderPopUp}>Order Now</button>
              </div>
            </div>

            <div className='min-h-[450px] flex justify-normal items-center relative order-1 sm:order-2'>
              <div className='h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center'>
                <img src={bookId} alt="" className='sm:scale-125 mx-auto cursor-pointer'/>
              </div>

              <div className=''>
                {
                  ImageList.map((data)=>(
                    <img src={data.image} alt="" className='w-[100px] hover:scale-110 cursor-pointer' onClick={()=>{
                      setBookId(data.id ===1?Book1: data.id===2?Book2:Book3)
                      setTitle(data.title)
                      setAuthor(data.author)
                    }}/>
                  ))
                }
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
