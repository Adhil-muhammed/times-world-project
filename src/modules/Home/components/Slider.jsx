import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countryWiseFilter, fetchCountryList } from "reduxConfig";

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const { isLoading, data, error } = useSelector((state) => state?.countries);
  console.log("data: ", data);
  console.log("isLoading: ", isLoading);

  useEffect(() => {
    fetchCountryList();
  }, []);

  const slides = [
    { id: 1, url: "https://via.placeholder.com/600x300?text=Slide+1" },
    { id: 2, url: "https://via.placeholder.com/600x300?text=Slide+2" },
    { id: 3, url: "https://via.placeholder.com/600x300?text=Slide+3" },
    { id: 4, url: "https://via.placeholder.com/600x300?text=Slide+4" },
    { id: 5, url: "https://via.placeholder.com/600x300?text=Slide+5" },
    { id: 6, url: "https://via.placeholder.com/600x300?text=Slide+6" },
    { id: 7, url: "https://via.placeholder.com/600x300?text=Slide+7" },
    { id: 8, url: "https://via.placeholder.com/600x300?text=Slide+8" },
    { id: 9, url: "https://via.placeholder.com/600x300?text=Slide+9" },
    { id: 10, url: "https://via.placeholder.com/600x300?text=Slide+10" },
  ];

  const x = [0, 1, 2, 3];

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

  const startDotIndex = Math.max(0, currentIndex - 1); // Start from one slide before the current index
  const endDotIndex = Math.min(slides.length - 1, startDotIndex + 3);

  slides.slice(startDotIndex, endDotIndex + 1);
  console.log(
    "slides",
    slides.slice(currentIndex > 3 ? 4 : 0, currentIndex > 3 ? 8 : 4)
  );

  return (
    <div className="container">
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
        <button className="prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="next" onClick={nextSlide}>
          ❯
        </button>
        <div className="dots">
          {slides
            .slice(currentIndex > 3 ? 4 : 0, currentIndex > 3 ? 8 : 4)
            .map((slide, index) => {
              return (
                <span
                  key={slide.id}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                ></span>
              );
            })}
        </div>
      </div>
    </div>
  );
};
