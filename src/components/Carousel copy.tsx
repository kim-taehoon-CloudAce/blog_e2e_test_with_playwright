import React, { useState, useEffect } from "react";

const IMAGE_1_URL = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const IMAGE_2_URL = "https://images.unsplash.com/photo-1606117331085-5760e3b58520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const IMAGE_3_URL = "https://images.unsplash.com/photo-1667971286579-63a5222780ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80";

const INTERVAL_TIME = 5000; // Interval in milliseconds

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the next image index
      const nextImage = (activeImage % 3) + 1;
      setActiveImage(nextImage);
    }, INTERVAL_TIME);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [activeImage]);

  return (
    <div>
      <div className="carousel">
        <ul className="carousel__slides">
          {[1, 2, 3].map((index) => (
            <React.Fragment key={index}>
              <input
                type="radio"
                name="radio-buttons"
                id={`img-${index}`}
                checked={activeImage === index}
                readOnly
              />
              <li className="carousel__slide-container">
                <div className="carousel__slide-img">
                  <img alt={`scenery ${index}`} src={getImageUrl(index)} />
                </div>
                <div className="carousel__controls">
                  <label
                    onClick={() => setActiveImage(getPrevIndex(index))}
                    className="carousel__slide-prev"
                  >
                    <span>&lsaquo;</span>
                  </label>
                  <label
                    onClick={() => setActiveImage(getNextIndex(index))}
                    className="carousel__slide-next"
                  >
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
      {/* end of div */}
    </div>
  );
}

// Utility functions to get previous and next indices
function getPrevIndex(currentIndex:any) {
  return currentIndex === 1 ? 3 : currentIndex - 1;
}

function getNextIndex(currentIndex:any) {
  return currentIndex === 3 ? 1 : currentIndex + 1;
}

// Utility function to get image URL based on index
function getImageUrl(index:Number) {
  switch (index) {
    case 1:
      return IMAGE_1_URL;
    case 2:
      return IMAGE_2_URL;
    case 3:
      return IMAGE_3_URL;
    default:
      return "";
  }
}
