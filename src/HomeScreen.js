import React from "react";
import "../src/HomeScreen.css";
import Banner from "./Banner";
import Nav from "./Nav";
import request from "./Request";
import Row from "./Row";
export default function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginal}
        isLargeRow
      />

      <Row title="Trending Now" fetchUrl={request.fetchTrending} />

      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />

      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />

      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />

      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />

      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />

      <Row title="Documentaries" fetchUrl={request.fetchDocumentries} />
    </div>
  );
}
