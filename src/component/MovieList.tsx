import { Typography, Box, Divider } from "@mui/material";
import { useContext } from "react";
import { movieContext } from "../context/movieContext";
import { fetchData } from "../fetch/fetchData";
import NotFound from "./NotFound";
import { themeContext } from "../context/themeContext";
// import { useState } from "react";

type FETCHDATA = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

const MovieList = ({ fun }: { fun: (id: string) => void }) => {
  //@ts-ignore
  const { movieName } = useContext(movieContext);
  //@ts-ignore
  const { toggle, dark, light } = useContext(themeContext);

  const dataMovie = fetchData(movieName);

  const clickhandle = (value: string) => {
    console.log(value);
    fun(value);
  };

  return (
    <Box
      className={`${
        toggle ? light.header : dark.header
      }  shadow-lg w-[40%] my-10 rounded-md
      ${dataMovie == undefined ? "h-screen" : "h:full"}
      `}
    >
      {dataMovie ? (
        dataMovie.map((value: FETCHDATA, index) => {
          return (
            <Box key={index} onClick={() => clickhandle(value.imdbID)}>
              <Box className="m-3 flex justify-between items-center cursor-pointer ">
                <Box className="w-[10%]">
                  <Typography
                    className="w-10 h-10"
                    component={"img"}
                    src={value.Poster}
                  ></Typography>
                </Box>
                <Box className="w-[50%] items-center flex flex-col">
                  <Typography>{value.Title}</Typography>
                  <Typography>year: {value.Year}</Typography>
                </Box>
              </Box>

              <Divider
                key={index}
                orientation="horizontal"
                className="bg-white"
                flexItem
              />
            </Box>
          );
        })
      ) : (
        <NotFound />
      )}
    </Box>
  );
};

export default MovieList;
