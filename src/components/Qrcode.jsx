import React from 'react';
import image from '../images/image-qr-code.png';

const Qrcode = () => {
  return (
    <div className="flex items-center flex-col justify-between p-5 bg-white shadow-lg rounded-xl h-3/5 w-80">
      <section className='h-3/5 w-full'>
        <img src={image} alt="test" className='h-full w-full shadow-lg rounded-xl'></img>
      </section>
      <section>
        <h1 className='text-xl'>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </section>
    </div>
  )
}

export default Qrcode