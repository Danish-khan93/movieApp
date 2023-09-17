import { Stack } from "@mui/material";
import { movieContext } from "./context/movieContext";
import Header from "./component/Header";
import MovieList from "./component/MovieList";
import MovieDetails from "./component/MoviesDetails";
import { useState } from "react";
import { themeContext } from "./context/themeContext";
import { hiddenContext } from "./context/hiddenContext";
import { fetchSingalMoive } from "./fetch/fetchSingalMovie";
import { FETCHSINGALDATA } from "./fetch/fetchSingalMovie";
const App = () => {
  //
  const [singalMovie, setSingalMovie] = useState<FETCHSINGALDATA | {}>({});
  const [toggle, setToggle] = useState(false);
  const [movieName, setMovieName] = useState("");

  const getId = async (id: string) => {
    // setMovieId(id)
    const dataMovieLog = await fetchSingalMoive(id);

    setSingalMovie(dataMovieLog);
  };

  //  context
  const [hidden, setHidden] = useState<boolean>(false);
  const dark = {
    header: "bg-[#2C2C2B] text-[#F5F5F5]",
    background: "bg-black",
    text: "text-white"
  };
  const light = {
    header: "text-[#2C2C2B] bg-[#F5F5F5]",
    background: "bg-white",
text: "text-black"
  };
  //  context
  return (
    <>
      <hiddenContext.Provider value={{ hidden, setHidden }}>
        <themeContext.Provider value={{ dark, light, toggle, setToggle }}>
          <movieContext.Provider value={{ movieName, setMovieName }}>
            <Header />
            <Stack
              direction={"row"}
              className={`${
                toggle ? light.background : dark.background
              } flex justify-evenly`}
            >
              <MovieList fun={getId} />
              <MovieDetails
                // @ts-ignore
                data={singalMovie}
              />
            </Stack>
          </movieContext.Provider>
        </themeContext.Provider>
      </hiddenContext.Provider>
    </>
  );
};

export default App;
