import React from 'react';
import image from '../images/image-qr-code.png';

const Qrcode = () => {
  return (
    <div className="flex items-center flex-col p-3 bg-white shadow-lg rounded-xl h-[460px] w-[300px]">
      <section className='h-3/5 w-full'>
        <img src={image} alt="test" className='h-full w-full shadow-lg rounded-xl'></img>
      </section>
      <section className='text-center mt-5 mx-2.5'>
        <h1 className='font-extrabold leading-tight text-[20px]'>Improve your front-end skills by building projects</h1>
        <p className='font-normal text-[15px] mt-3 leading-tight'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </section>
    </div>
  )
}

export default Qrcode