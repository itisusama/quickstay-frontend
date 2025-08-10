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
      {/* You can work on this image via Tailwind classes */}
      {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome</h1>
      </div> */}
      <Content className="py-8 absolute inset-0 flex items-center">
        <div className="bg-[#49B9FF80]">
          <p>The Ultimate Hotel Experience</p>
        </div>
      </Content>
    </div>
    </>
  )
}

export default Home
