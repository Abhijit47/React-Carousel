import React, { useState } from 'react';
import { Button } from 'reactstrap';

// const images = [
//   "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&h=500",
//   "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&h=500",
//   "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&h=500",
//   "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&h=500",
//   "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&h=500"
// ];

// eslint-disable-next-line
const pictures = [
  "https://images.unsplash.com/photo-1672243777342-0698e84a41fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80&h=300",
  "https://images.unsplash.com/photo-1686485231345-7e2808ed2f3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80&h=300",
  "https://images.unsplash.com/photo-1686080976644-552603bd8149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80&h=300",
  "https://images.unsplash.com/photo-1685963150438-f8308003391e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80&h=300"
];

const Slider = () => {
  // state variable to keep track of the current slide
  const [currentImage, setCurrentImage] = useState(0);

  // function to navigate to the next slide
  const nextSlide = () => {
    setCurrentImage((prevCurrent) => {
      console.log(prevCurrent);
      return prevCurrent === pictures.length - 1 ? 0 : prevCurrent + 1;
    });
  };

  // function to navigate to the prev slide
  const prevSlide = () => {
    setCurrentImage((prevCurrent) => {
      console.log(prevCurrent);
      return prevCurrent === 0 ? pictures.length - 1 : prevCurrent - 1;
    });
  };

  return (
    <>
      {/* <h1 className='text-center text-light bg-dark bg-gradient pb-1 rounded-2 shadow-sm'>
        React Carousel
      </h1> */}
      <div className='container-fluid p-2 hstack gap-lg-2 gap-md-2 gap-sm-1 gap-0'>
        <div className=''>
          <Button className='rounded-pill fw-bold fs-5 pt-1' onClick={prevSlide}>
            &larr;
          </Button>
        </div>

        {pictures?.map((image, index) => {
          return (
            currentImage === index && (
              <div key={index} className="hstack align-items-center shadow-sm">
                <img src={image} alt="" className='img-fluid rounded-2' />
              </div>
            )
          );
        })}

        <div className=''>
          <Button className='rounded-pill fw-bold fs-5 pt-1' onClick={nextSlide}>
            &rarr;
          </Button>
        </div>
      </div>
    </>
  );
};

export default Slider;