import React, { useState } from "react";
import image1 from "../assests/images/image-1.jpg";
import image2 from "../assests/images/image-2.jpg";
import image3 from "../assests/images/image-3.jpg";
import image4 from "../assests/images/image-4.jpg";

let imageData = [
  {
    path: image1,
    alt: "First image",
  },
  {
    path: image2,
    alt: "Second image",
  },
  {
    path: image3,
    alt: "Third image",
  },
  {
    path: image4,
    alt: "Fourth image",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + imageData.length) % imageData.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % imageData.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrevious}>Previous</button>
      <img src={imageData[currentIndex]?.path} alt={imageData[currentIndex]?.alt} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
