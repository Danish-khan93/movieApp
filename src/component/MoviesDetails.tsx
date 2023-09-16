import { Typography, Box } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";
import { FETCHSINGALDATA } from "../fetch/fetchSingalMovie";
import StarIcon from "@mui/icons-material/Star";
// import { useState } from "react";
const MovieDetails = ({ data }: { data: FETCHSINGALDATA }) => {
  // @ts-ignore
  const { toggle, dark, light } = useContext(themeContext);
  // const [loading, setLoading] = useState(false);

  return (
    <Box
      className={`${
        toggle ? light.header : dark.header
      } shadow-lg w-[40%] my-10 rounded-md `}
    >
      <Box>
        <Box className="flex justify-around items-center m-3 rounded-md ">
          <Typography
            component={"img"}
            src={data.Poster}
            className="w-[200px] h-[250px]"
          ></Typography>
          <Box className="flex flex-col gap-3">
            <Typography className="font-bold text-2xl break-words">
              {data.Title}
            </Typography>
            <Typography>{`${data.Released} - ${data.Runtime}`}</Typography>
            <Typography>{data.Genre}</Typography>
            <Typography>
              <StarIcon className="text-[#FFD700]" /> {data.imdbRating}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography className="m-8 ">{data.Plot}</Typography>
          </Box>
        <Box>
          <Typography className="m-8 ">{`Directed by ${data.Director}`}</Typography>
          </Box>
      </Box>
    </Box>
  );
};

export default MovieDetails;
