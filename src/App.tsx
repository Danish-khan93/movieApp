import { Stack } from "@mui/material";
import { movieContext } from "./context/movieContext";
import Header from "./component/Header";
import MovieList from "./component/MovieList";
import MovieDetails from "./component/MoviesDetails";
import { useState } from "react";
import { themeContext } from "./context/themeContext";
const App = () => {
  const dark = {
    header: "bg-[#2C2C2B] text-[#F5F5F5]",
    background: "bg-black",
  };
  const light = {
    header: "text-[#2C2C2B] bg-[#F5F5F5]",
    background: "bg-white",
  };
  const [toggle, setToggle] = useState(false);
  const [movieName, setMovieName] = useState("");
  return (
    <>
      <themeContext.Provider value={{ dark, light,toggle,setToggle }}>
        <movieContext.Provider value={{ movieName, setMovieName }}>
          <Header />
          <Stack direction={"row"} className={`${toggle ? light.background:dark.background} flex justify-evenly`}>
            <MovieList />
            <MovieDetails />
          </Stack>
        </movieContext.Provider>
      </themeContext.Provider>
    </>
  );
};

export default App;
