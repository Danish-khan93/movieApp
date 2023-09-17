import { useEffect, useState } from "react";
import axios from "axios";

type FETCHDATA = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export const fetchData = (movieName: string) => {
  const [movie, setMovie] = useState<FETCHDATA[]>([]);
  const key = "6f07ad1c";
  const url = `http://www.omdbapi.com/?apikey=${key}&s=${
    movieName ? movieName : "inception"
  }`;

  const response = async () => {
    try {
      const data = await axios.get(url);

      setMovie(data.data.Search);
    } catch (error) {
      console.log(error);
      alert("the movie is not found");
    }
  };
  useEffect(() => {
    response();
  }, [movieName]);

  return movie;
};
