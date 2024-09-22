import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const Slider = () => {
  const countryState = useSelector((state) => state?.country);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  console.log("countryState?.data: ", countryState?.data);

  const slides = [
    { id: 1, url: "https://flagcdn.com/ax.svg" },
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
      <div className="line-with-label home w-100 mb-4">
        <span className="fs-1" style={{ fontWeight: 600 }}>
          Welcome
        </span>
      </div>
      <Row>
        <Col sm={12} md={10}>
          <div className="slider-container">
            <div
              className="slide d-flex justify-content-center"
              key={slides[currentIndex].id}
            >
              <span className="slider-name">
                {countryState?.data[currentIndex + 5]?.name}
              </span>
              <img
                src={countryState?.data[currentIndex + 5]?.flag}
                alt={`Slide ${currentIndex + 1}`}
              />
            </div>
            <div>
              <FaArrowLeft
                size={35}
                className="slider-arrow left-arrow"
                onClick={prevSlide}
              />
              <div></div>
              <FaArrowRight
                size={35}
                className="slider-arrow  right-arrow"
                onClick={nextSlide}
              />
            </div>

            <div className="dots">
              {countryState?.data.slice(0, 4)?.map((slide, index) => (
                <span
                  key={slide.id}
                  className={`dot ${
                    currentIndex === index ? "active-slide" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </Col>
        <Col sm={12} md={2}>
          <img
            src={countryState?.data[40]?.flag}
            alt={`Slide ${currentIndex + 1}`}
            className="img-fluid"
          />
        </Col>
      </Row>
    </>
  );
};
