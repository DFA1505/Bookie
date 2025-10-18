import React from 'react'
import Book1 from '../../assets/BestBooks/Livro4.png'
import Book2 from '../../assets/BestBooks/Livro5.png'
import Book3 from '../../assets/BestBooks/Livro6.png'
import { FaS } from 'react-icons/fa6'
import { FaStar } from 'react-icons/fa'

const BooksData = [
  {
    id:1,
    image:Book1,
    title:'Whispers of the Ancient Stars',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptate. Ratione necessitatibus quis soluta voluptates repudiandae ut pariatur, officiis harum, consequatur odio impedit veniam inventore autem mollitia voluptate quae unde.',
    aosDelay:'100'
  },
  {
    id:2,
    image:Book2,
    title:"The Alchemist's Secret Garden",
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptate. Ratione necessitatibus quis soluta voluptates repudiandae ut pariatur, officiis harum, consequatur odio impedit veniam inventore autem mollitia voluptate quae unde.',
    aosDelay:'500'
  },
  {
    id:3,
    image:Book3,
    title:'Chronicles of the Starforged Blade',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptate. Ratione necessitatibus quis soluta voluptates repudiandae ut pariatur, officiis harum, consequatur odio impedit veniam inventore autem mollitia voluptate quae unde.',
    aosDelay:'900'
  },
]


const BestBooks = ({handleOrderPopUp}) => {
  return (
      <div className='py-10' id='bestbooks'>
        <div className="container">
            <div className='text-center mb-20 mx-auto'>
                <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                    Trending Books
                </p>
                <h1 className='text-3xl font-bold dark:text-white'>Best Books</h1>
                <p className='text-xs text-gray-400 dark:text-white py-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ipsum, omnis aliquid fuga quibusdam eos? Eaque inventore quidem adipisci ut assumenda quas atque. Facilis, assumenda placeat. Ex eum ad accusantium.</p>

                <div className='lg:flex lg:space-x-3 xl:space-x-32 justify-center pt-10 grid grid-cols-1 mx-auto space-y-10 lg:space-y-0 place-items-center'>
                    {
                        BooksData.map((data)=>(
                            <div className='flex flex-col w-[300px] bg-gray-300 dark:bg-gray-400 rounded-lg hover:bg-primary/20 dark:hover:bg-primary/50 hover:scale-105 duration-500 cursor-pointer' data-aos='fade-up' data-aos-delay={data.aosDelay}>
                                <div className='w-[300px]'>
                                    <img src={data.image} alt="" className='rounded-t-lg'/>
                                </div>
                                <div className='p-2'>
                                    <div className="flex justify-center items-center gap-1">
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    <FaStar className='text-yellow-500'/>
                                    </div>
                                <h1 className='font-bold pb-1'>{data.title}</h1>
                                <p className='line-clamp-3 text-sm p-1'>{data.description}</p>
                                <div>
                <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-2 mb-2 hover:scale-105 duration-500' onClick={handleOrderPopUp}>Order Now</button>
              </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
      </div>
  )
}

export default BestBooks
