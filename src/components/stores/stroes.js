import React from "react";
import "./stores.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Store() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const videos = [
    {
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Video 1",
    },
    {
      url: "https://www.w3schools.com/html/movie.mp4",
      title: "Video 2",
    },
    {
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Video 3",
    },
    {
      url: "https://www.w3schools.com/html/movie.mp4",
      title: "Video 4",
    },
    {
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Video 5",
    },
  ];

  const images = [
    "https://i.ytimg.com/vi/1kjlRqbLrKo/maxresdefault.jpg",
    "https://i.ytimg.com/vi/GSGMtAisbr4/maxresdefault.jpg",
  ];

  return (
    <>
      <div className="store-title">
        <strong>
          <h1>STORIES IN MOTION</h1>
        </strong>
      </div>

      <div className="video-slider">
        <Slider {...settings}>
          {videos.map((video, index) => (
            <div key={index} className="stories-image">
              <video width="40%" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
            </div>
          ))}
        </Slider>
      </div>

      <div className="store-title">
        <strong>
          <h1>STORIES IN CAUSE</h1>
        </strong>
      </div>

      <div className="image-slider">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="stories-image">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Store;
