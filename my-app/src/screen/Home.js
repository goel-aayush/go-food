import React from 'react';
import Navbar from '../component/Navbar';
import Card from '../component/card';
import Carousal from '../component/carousal';
import Footer from '../component/Footer';

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className=''>
        <Carousal />
      </div>
      <div className='flex mr-2 ml-2'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

