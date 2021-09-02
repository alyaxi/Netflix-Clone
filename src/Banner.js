import React from "react";
import "../src/Banner.css";
export default function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}

    >

        <div className="banner__content">
            <h1 className="banner__title">
                Movie Name
            </h1>
            <div className="banner__buttons">
                <button  className="banner__buttons">Play</button>
                <button className="banner__buttons">My List</button>
            </div>
            <h1 className="banner__descriptions">This is a test Description</h1>
        </div>
        <div className="banner--fadeButton" />
    </header>
  );
}
