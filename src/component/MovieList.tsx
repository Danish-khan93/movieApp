import { Typography, Box, Divider } from "@mui/material";
import { useContext } from "react";
import { movieContext } from "../context/movieContext";
import { fetchData } from "../fetch/fetchData";
import NotFound from "./NotFound";
import { themeContext } from "../context/themeContext";


type FETCHDATA = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

const MovieList = () => {
  //@ts-ignore
  const { movieName } = useContext(movieContext);
  //@ts-ignore
const {toggle,dark,light} = useContext(themeContext)
  
  const dataMovie = fetchData(movieName);

  return (
    <Box className={`${toggle?light.header:dark.header} w-[40%] my-10 rounded-md `}>
      {dataMovie? (dataMovie.map((value: FETCHDATA, index) => {
        return (
          <Box
            key={index}
          
          >
            <Box   className="m-3 flex justify-between items-center ">
              <Box className="w-[10%]">
                <Typography
                  className="w-10 h-10"
                  component={"img"}
                  src={value.Poster}
                ></Typography>
              </Box>
              <Box className="w-[50%] items-center flex flex-col">
                <Typography className="">{value.Title}</Typography>
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
      })): <NotFound/>  }
    </Box>
  );
};

export default MovieList;
