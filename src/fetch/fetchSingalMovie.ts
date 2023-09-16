// import { useEffect,useState } from "react";
import axios from "axios";

export type FETCHSINGALDATA = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Plot: string;
  Director: string;
  Runtime: string;
  Released: string;
  Genre: string;
  imdbRating:string;
};

export const fetchSingalMoive = async (id: string) => {
  const key = "6f07ad1c";
  const url = `http://www.omdbapi.com/?apikey=${key}&i=${id}`;

  const data = await axios.get(url);
  const result = data.data;
  console.log(result);
  return result;
};
