import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {  useRef } from "react";
import {useContext} from "react"
import { movieContext } from "../context/movieContext";


const SearchField = () => {
//@ts-ignore
const {setMovieName} =  useContext(movieContext)

const searchRef = useRef("");




const clickHandler = () => {
  
  //@ts-ignore
    setMovieName(searchRef.current.value);
 
  
  };

  return (
    <Box className="bg-[#F5F5F5] w-[300px] rounded-xl flex items-center justify-evenly ">
      <TextField
        className="border-none active:border-none "
        variant="standard"
        size="small"
        placeholder="movie search"
        inputRef={searchRef}
      />
      <IconButton onClick={clickHandler}>
        <SearchIcon className="" />
      </IconButton>
    </Box>
  );
};

export default SearchField;



