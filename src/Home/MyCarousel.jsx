
import { Carousel } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, event) => setIndex(selectedIndex);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000); // Change the number for desired slide interval (in milliseconds)

    return () => clearInterval(intervalId);
  }, []);
  const slides = [
    {
      image: 'https://mtc.jharkhand.gov.in/Images/b3.jpg',
      altText: 'Slide 1 Description',
      content: (
        <div>
          <h3>Slide 1 Heading</h3>
          <p>Slide 1 content goes here. You can add any HTML elements here.</p>
        </div>
      ),
    },
    {
      image: 'https://mtc.jharkhand.gov.in/Images/b1.jpg',
      altText: 'Slide 2 Description',
      content: (
        <div>
          <h3>Slide 2 Heading</h3>
          <p>Slide 2 content goes here. You can add any HTML elements here.</p>
        </div>
      ),
    },
    {
      image: 'https://mtc.jharkhand.gov.in/Images/b2.jpg',
      altText: 'Slide 3 Description',
      content: (
        <div>
          <h3>Slide 3 Heading</h3>
          <p>Slide 3 content goes here. You can add any HTML elements here.</p>
        </div>
      ),
    },
  ];

  return (
    <Carousel className='mt-6' fluid activeIndex={index} onSelect={handleSelect}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={slide.image} alt={slide.altText} fluid/>
          <Carousel.Caption>{slide.content}</Carousel.Caption>
        </Carousel.Item>))}
      </Carousel>
  )
};
export default MyCarousel;