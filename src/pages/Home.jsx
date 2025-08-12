import React from 'react'
import heroImage from '../assets/heroImage.png'
import Content from '../components/Content'
import { assets, roomsDummyData } from '../assets/assets'
import HotelCard from '../components/HotelCard'
import ExclusiveOffers from '../components/Home/ExclusiveOffers'

const Home = () => {
  const hotels = [
    {
      name: "The Grand Resort",
      city: "Maldives",
      price: 100,
      rating: 4,
      image: roomsDummyData[0].images[0],
      badge: "Best Seller",
    },
    {
      name: "Ocean View Hotel",
      city: "Dubai",
      price: 120,
      rating: 5,
      image: roomsDummyData[0].images[0],
      badge: "New",
    },
    {
      name: "Mountain Retreat",
      city: "Switzerland",
      price: 150,
      rating: 4,
      image: roomsDummyData[0].images[0],
      badge: "Featured",
    },
    {
      name: "City Lights Inn",
      city: "New York",
      price: 90,
      rating: 3,
      image: roomsDummyData[0].images[0],
      badge: "Best Seller",
    }
  ];

  return (
    <>
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <Content className="py-8 absolute inset-0 flex flex-col items-start justify-center">
        <div className="badge border-none bg-[#49B9FF80] text-white">
          <p>The Ultimate Hotel Experience</p>
        </div>
        <h2 className='font-[800] text-4xl md:text-5xl lg:text-6xl mt-4 text-white'>
            Discover Your Perfect <br />
            Getaway Destination
        </h2>
        <p className='text-white'>
          Unparalleled luxury and comfort await at the world's most exclusive <br />
          hotels and resorts. Start your journey today.
        </p>

        {/* FORM */}
        <form action="#" method="post">
          <div className='bg-white rounded-lg p-4 mt-6 shadow-lg grid content-center items-center grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-1'>
          {/* Location */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src={assets.locationIcon} alt="location" />
              <span className='text-[#767676]'>Destination</span>
            </div>
            <input type="text" placeholder="Dubai" className="input input-ghost w-fit" />
          </div>
          {/* Location */}
          {/* Check Out */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src={assets.calenderIcon} alt="location" />
              <span className='text-[#767676]'>Check Out</span>
            </div>
            <input type="date" className="input input-ghost w-fit" />
          </div>
          {/* Check Out */}
          {/* Check In */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src={assets.calenderIcon} alt="location" />
              <span className='text-[#767676]'>Check In</span>
            </div>
            <input type="date" className="input input-ghost w-fit" />
          </div>
          {/* Check In */}
          {/* Guests */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src={assets.calenderIcon} alt="location" />
              <span className='text-[#767676]'>Guests</span>
            </div>
            <input type="number" placeholder='2' className="input input-ghost w-fit" />
          </div>
          {/* Guests */}
          <button className="btn btn-neutral">
            <img src={assets.searchIcon} alt="search" />
            Serach
          </button>
        </div>
        </form>
        {/* FORM */}
      </Content>
    </div>

    <Content className='py-16 bg-[#f4f8fb]'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-3xl'>Featured Hotels</h2>
        <p className='text-center text-gray-500 mt-2'>
          Discover our handpicked selection of exceptional properties around the world, offering <br /> unparalleled luxury and unforgettable experiences
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {hotels.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} />
      ))}
    </div>
    <div className='flex justify-center mt-6'><button className='btn'>View All Hotels</button></div>
    </Content>

    {/* Exclusive Offers */}
    <ExclusiveOffers/>
    {/* Exclusive Offers */}
    </>
  )
}

export default Home