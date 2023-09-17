import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";

const Toggel = () => {
  //@ts-ignore
  const { setToggle, toggle, dark, light } = useContext(themeContext);
  const themeToggel = () => {
    setToggle(!toggle);
  };
  return (
    <Box
      className={`${
        toggle ? dark.background : light.background
      } bg-black rounded-full w-[30px] h-[20px] flex`}
    >
      <span
        className={`${
          !toggle
            ? "bg-[#1b1C1B] rounded-full drop-shadow-md w-[25px] h-[25px] relative right-3 bottom-[3px]"
            : "bg-white rounded-full shadow-lg w-[25px] h-[25px] relative left-3 bottom-[3px]"
        }`}
      >
        <Button onClick={themeToggel} className=""></Button>
      </span>
    </Box>
  );
};

export default Toggel;
