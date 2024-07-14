import React, { useEffect, useState } from "react";
import "./RowPost.css";
import { imgUrl } from "../../constants/constants";
import axios from "../../axios";

function RowPost(props) {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results);
        setmovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => 
          <img
            src={`${imgUrl+movie.backdrop_path}`}
            alt="poster"
            className={props.isSmall ? 'smallPoster' : 'poster'}
          />
        )}
      </div>
    </div>
  );
}

export default RowPost;
