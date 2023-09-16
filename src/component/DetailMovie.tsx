import { Typography, Box, Button ,IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StarIcon from "@mui/icons-material/Star";
import { FETCHSINGALDATA } from "../fetch/fetchSingalMovie";
// import { getItem } from "../localStorage/loacalStorage";

const DetailMovie = ({ data ,localDataValue }: { data: FETCHSINGALDATA,localDataValue:()=>  void }) => {
  const clickHandler = () => {
    localDataValue()
  };

  return (
    // className={hidden? "hidden":""}
<Box >
        <Box>
            <IconButton onClick={()=>{}}><ArrowBackIcon className="text-white"/></IconButton>
        </Box>
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
      <Box className="flex justify-center">
        <Button
          className="bg-[#FFD700] hover:bg-[#FFD700] text-black font-bold "
          onClick={clickHandler}
        >
          ADD Watch List
        </Button>
      </Box>
    </Box>
  );
};

export default DetailMovie;
