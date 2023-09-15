import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import SearchField from "./SearchField";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";
import Toggel from "./Toggel";
const Header = () => {
//@ts-ignore
  const { toggle, light, dark } = useContext(themeContext);
  return (
    <AppBar position="static">
      <Toolbar
        className={`flex justify-between px-12 ${
          toggle ? light.header : dark.header
        }`}
      >
        <Box>
          <Typography variant="h5">PopCorn</Typography>
        </Box>
        <SearchField />
        <Toggel />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
