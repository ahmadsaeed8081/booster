import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="tw-h-32 tw-bg-[#161616] tw-flex tw-items-center">
      <div className="tw-container tw-mx-auto">
        <Slider {...settings}>
          {["brand1", "brand2", "brand3", "brand4", "brand5"].map((brand, index) => (
            <div key={index} className="tw-p-3 tw-flex tw-justify-center tw-items-center">
              <img
                src={require(`../../assets/images/${brand}.png`)}
                className="max-h-full max-w-full object-contain"
                alt={brand}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
