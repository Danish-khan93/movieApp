import { Box } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";
import { FETCHSINGALDATA } from "../fetch/fetchSingalMovie";
import DetailMovie from "./DetailMovie";
import WatchMovie from "./WatchMovie";
import { useEffect, useState } from "react";
import { getItem } from "../localStorage/loacalStorage";

const MovieDetails = ({ data }: { data: FETCHSINGALDATA }) => {
  // @ts-ignore
  const { toggle, dark, light } = useContext(themeContext);
  // const [loading, setLoading] = useState(false);
  const [local, setLocal] = useState<FETCHSINGALDATA[]>(getItem());

  const setLocalValue = () => {
    setLocal([...local, data]);
  };
  useEffect(() => {
    localStorage.setItem("movieWatchList", JSON.stringify(local));
  }, [local]);

  return (
    <Box
      className={`${
        toggle ? light.header : dark.header
      } shadow-lg w-[40%] my-10 rounded-md `}
    >
      <DetailMovie data={data} localDataValue={setLocalValue} />
      <WatchMovie dataLocal={local} />
    </Box>
  );
};

export default MovieDetails;
