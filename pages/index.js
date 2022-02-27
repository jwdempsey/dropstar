import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Slide } from "react-slideshow-image";

export default function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

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
        <Slide easing="ease" slidesToShow={3}>
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
