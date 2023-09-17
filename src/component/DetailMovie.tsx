import { Typography, Box, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";
import { FETCHSINGALDATA } from "../fetch/fetchSingalMovie";
import { useContext } from "react";
import { hiddenContext } from "../context/hiddenContext";
import { themeContext } from "../context/themeContext";
const DetailMovie = ({
  data,
  localDataValue,
}: {
  data: FETCHSINGALDATA;
  localDataValue: () => void;
}) => {
  const clickHandler = () => {
    localDataValue();
  };
  //
  //@ts-ignore
  const { hidden, setHidden } = useContext(hiddenContext);
  //@ts-ignore
  const { dark, light, toggle, setToggle } = useContext(themeContext);
  //

  return (
    <Box className={hidden ? "" : "hidden"}>
      <Box>
        <IconButton
          onClick={() => {
            setHidden(false);
            setToggle(!toggle);
          }}
        >
          <ArrowBackIcon className={`${toggle ? light.text : dark.text}`} />
        </IconButton>
      </Box>
      <Box className="flex justify-around shadow-md p-2 items-center m-3 rounded-md ">
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
      <Box className="flex justify-center">
        <Button
          className="bg-[#FFD700] hover:bg-[#FFD700] my-3 text-black font-bold "
          onClick={clickHandler}
        >
          ADD Watch List
        </Button>
      </Box>
    </Box>
  );
};

export default DetailMovie;
