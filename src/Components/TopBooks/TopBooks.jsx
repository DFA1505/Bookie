import React from 'react'
import Book1 from '../../assets/Hero/Livro1.png'
import Book2 from '../../assets/Hero/Livro2.png'
import Book3 from '../../assets/Hero/Livro3.png'
import Book4 from '../../assets/TopBooks/Livro4.png'
import Book5 from '../../assets/TopBooks/Livro5.png'
import Book6 from '../../assets/TopBooks/Livro6.png'
import { FaStar } from 'react-icons/fa6'

const BooksData = [
  {
    id:1,
    img:Book1,
    title:'The Secrets Of Navigation',
    rating:5.0,
    author:'Alexandre Costa'
  },
  {
    id:2,
    img:Book2,
    title:'Eldoria Chronicles',
    rating:5.0,
    author:'Sofia Moraes'
  },
  {
    id:3,
    img:Book3,
    title:'Quantqic Coding: Simulated R...',
    rating:5.0,
    author:'Gabriel Mendes'
  },
  {
    id:4,
    img:Book4,
    title:'Whispers of the Ancient Stars',
    rating:5.0,
    author:'Zara Khan'
  },
  {
    id:5,
    img:Book5,
    title:"The Alchemist's Secret Garden",
    rating:5.0,
    author:'Silas Blackwood'
  },
  {
    id:6,
    img:Book6,
    title:'Chronicles of the Starforged Bl...',
    rating:5.0,
    author:'Anna Sharna'
  },
]

const TopBooks = () => {
  return (
    <div className='py-10' id='books'>
      <div className="container">
        <div className='text-center mb-20 mx-auto'>
         <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                    Our
                </p>
                <h1 className='text-3xl font-bold dark:text-white'>Most Searched Books</h1>
                <p className='text-xs text-gray-400 dark:text-white py-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi ipsum, omnis aliquid fuga quibusdam eos? Eaque inventore quidem adipisci ut assumenda quas atque. Facilis, assumenda placeat. Ex eum ad accusantium.</p>
        </div>
        <div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center' data-aos='fade-up' data-aos-delay='900'>
            {
            BooksData.map((data)=>(
              <div className='m-3 dark:hover:bg-primary/50 hover:scale-105 duration-500 cursor-pointer rounded-xl'>
                <div className='bg-gray-500 dark:bg-white/30 place-items-center h-[220px] w-[250px] rounded-t-lg hover:bg-primary'>
                <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover '/>
                </div>
                <div className='dark:text-white bg bg-gray-300 dark:bg-gray-400 rounded-b-lg p-2 max-w-[250px] '>
                  <h2 className='font-semibold'>{data.title}</h2>
                  <p className='text-sm'>{data.author}</p>
                  <div className='flex items-center pt-1'>
                    <FaStar className='text-yellow-500'/>
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
        
          <div className='flex justify-center items-center mx-auto place-items-center py-10'>
                <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-500' data-aos='fade-up'>View All Books</button>
          </div>
      </div>
    </div>
  )
}

export default TopBooks
