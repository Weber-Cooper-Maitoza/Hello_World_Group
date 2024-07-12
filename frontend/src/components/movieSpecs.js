import React, { useEffect, useState } from "react";

export default function Movie() {
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch('http://localhost:4000/hello', {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        if (response.ok) {
          console.log("Got Response");
          const details = await response.json();
          setMovieDetail(details);
        } else {
          console.log("Bad Response");
        }
      } catch (err) {
        console.log("Error: " + err);
      }
    }

    getMovie();
  },[]);

  if(!movieDetail){
    return <p>No movie details found</p>
  }
  else {
    return (
      <div>
        <h1>Title: {movieDetail.title}</h1>
        <h3>Plot: {movieDetail.plot}</h3>
        <h3>Genre: {movieDetail.genres.join(", ")}</h3>
        <h3>Year: {movieDetail.year}</h3>
      </div>
    );
  }

}

