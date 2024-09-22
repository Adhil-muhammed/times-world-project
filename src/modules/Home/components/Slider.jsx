import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"; // Import icons

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const slides = [
    { id: 1, url: "https://via.placeholder.com/600x300?text=Slide+1" },
    { id: 2, url: "https://via.placeholder.com/600x300?text=Slide+2" },
    { id: 3, url: "https://via.placeholder.com/600x300?text=Slide+3" },
    { id: 4, url: "https://via.placeholder.com/600x300?text=Slide+4" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="line-with-label home w-45 my-4">
        <span className="fs-1" style={{ fontWeight: 600 }}>
          Welcome
        </span>
      </div>
      <div className="slider-container">
        <div className="slide" key={slides[currentIndex].id}>
          <img
            src={slides[currentIndex].url}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
        <FaArrowLeft className="prev" size={35} onClick={prevSlide} />
        <FaArrowRight className="next" size={35} onClick={nextSlide} />
        <div className="dots">
          {slides.map((slide, index) => (
            <span
              key={slide.id}
              className={`dot ${currentIndex === index ? "active-slide" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};
