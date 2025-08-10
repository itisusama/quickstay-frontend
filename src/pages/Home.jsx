import React from 'react'
import heroImage from '../assets/heroImage.png'
import Content from '../components/Content'

const Home = () => {
  return (
    <>
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <Content className="py-8 absolute inset-0 flex items-center">
        <div className="badge border-none bg-[#49B9FF80] text-white">
          <p>The Ultimate Hotel Experience</p>
        </div>
      </Content>
    </div>
    </>
  )
}

export default Home
