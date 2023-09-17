import { Box, Typography } from "@mui/material";
import { FETCHSINGALDATA } from "../fetch/fetchSingalMovie";
import StarIcon from "@mui/icons-material/Star";
import { hiddenContext } from "../context/hiddenContext";
import { useContext } from "react";
const WatchMovie = ({ dataLocal }: { dataLocal: FETCHSINGALDATA[] }) => {
  //@ts-ignore
  const { hidden } = useContext(hiddenContext);

  const watchList = dataLocal.map((value, index) => {
    return (
      <Box key={index} className="flex justify-between items-center m-5">
        <Box>
          <Typography
            component={"img"}
            src={value.Poster}
            className="w-[50px] h-[50px]"
          ></Typography>
        </Box>
        <Box className="flex justify-evenly gap-5">
            
          <Typography>
            <StarIcon className="text-[#FFD700]" />
            {value.imdbRating}
          </Typography>
          <Typography>{value.Runtime}</Typography>
          <Typography>Watched</Typography>
        </Box>
      </Box>
    );
  });

  // reducer for sum watch time
  const time = dataLocal.reduce((acc, preValue) => {
    return acc + Number(preValue.Runtime.slice(0, 3));
  }, 0);
  // reducer for sum watch time

  return (
    <div className={hidden ? "hidden" : ""}>
      <Box className="shadow-md">
        <Typography variant="h6" className=" p-5 ">
          Movies you watched
        </Typography>
        <Box className="flex justify-between p-3">
          <Typography>Total Moive {dataLocal.length}</Typography>
          <Typography>Total Watched Time {time}</Typography>
          {/* <Typography>{dataLocal.length}</Typography> */}
        </Box>
      </Box>
      {watchList}
    </div>
  );
};

export default WatchMovie;

