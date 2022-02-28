import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Slide } from "react-slideshow-image";

export default function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  const properties = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    indicators: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="container">
      <Head>
        <title>DropStar</title>
      </Head>

      <main className="main">
        <h1 className="title">&#11088;&#11088; DropStar</h1>
      </main>

      <div className="container">
        <h2>&#128016; The Legend</h2>
        <Slide {...properties}>
          {photos &&
            photos.map((img, index) => (
              <div className="slide" key={index}>
                <div style={{ backgroundImage: `url(${img.url})` }}></div>
              </div>
            ))}
        </Slide>
      </div>
      <footer className="footer"></footer>
    </div>
  );
}
