import React from 'react'
import Content from '../Content'
import { assets, exclusiveOffers } from '../../assets/assets'

const ExclusiveOffers = () => {
  return (
    <Content className="py-16">
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl'>Exclusive Offers</h2>
        <div className="flex items-center gap-2">
            <p className='text-sm'>View All offers</p>
            <img src={assets.arrowIcon} alt="arrow" />
        </div>
      </div>

      <div className='mb-8'>
        <p>Take advantage of our limited-time offers and special packages to enhance your <br /> stay and create unforgettable memories.</p>
      </div>

      {/* Exclusive offer cards Map */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {exclusiveOffers.map((offer) => (
    <div
      key={offer._id}
      className="relative rounded-xl overflow-hidden shadow-lg"
    >
      {/* Image */}
      <img
        src={offer.image}
        alt={offer.title}
        className="w-full h-auto object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>

      {/* Badge */}
      <div className="absolute top-3 left-3 badge badge-[#fffff] text-black px-3 py-2">
        {offer.priceOff}% OFF
      </div>

      {/* Text Content */}
      <div className="absolute top-10 left-0 p-4 text-white w-full">
        <h3 className="text-lg font-bold">{offer.title}</h3>
        <p className="text-sm">{offer.description}</p>
        <p className="text-xs mt-1">Expires: {offer.expiryDate}</p>
      </div>

      <div className='absolute bottom-0 left-0 p-4 text-white flex items-center gap-2 cursor-pointer'>
        <p>View Offers</p>
        <img src={assets.arrowIcon} alt="arrow" className='invert' />
      </div>
    </div>
  ))}
</div>
      {/* Exclusive offer cards Map */}
    </Content>
  )
}

export default ExclusiveOffers
