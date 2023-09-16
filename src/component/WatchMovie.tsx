import { Box, Typography } from "@mui/material";
import { FETCHSINGALDATA } from "../fetch/fetchSingalMovie";
import StarIcon from "@mui/icons-material/Star";
const WatchMovie = ({ dataLocal }: { dataLocal: FETCHSINGALDATA[] }) => {
  console.log(dataLocal);

  const watchList = dataLocal.map((value) => {
    return (
      <Box className="flex justify-between items-center m-5">
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
  //   className={hidden? "":"hidden"}
  return <div>{watchList}</div>;
};

export default WatchMovie;
