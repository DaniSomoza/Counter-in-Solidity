import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = {
  palette: {
    mode: "dark",
  },
};

const customMuiTheme = responsiveFontSizes(createTheme(theme));

export default customMuiTheme;
