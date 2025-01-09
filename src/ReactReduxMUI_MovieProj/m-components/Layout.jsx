import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, styled } from "@mui/material";
import { Link } from "react-router-dom";
import SearchMoviesSuggestion from "../containers/SearchMoviesSuggestion";

const darkTheme = createTheme({
  palette: { mode: "dark" },
});

const Img = styled("img")({
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  width: "500", //ask swadhin about this  500 and 800px diff
  maxWidth: "100%",
});

const LayoutWapper = styled("div")(({ theme }) => ({
  width: "auto",
  margin: 24,
  [theme.breakpoints.up("lg")]: {
    marginLeft: "auto",
    marginRight: "auto",
    width: theme.breakpoints.values.lg,
  },
}));

const Layout = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline></CssBaseline>
        <LayoutWapper>
          <Link to="/">
            <Img src="/movie_photos/logo.png" alt="movie DB" />
          </Link>
          <SearchMoviesSuggestion></SearchMoviesSuggestion>
        </LayoutWapper>
        {children}
      </ThemeProvider>
    </div>
  );
};
export default Layout;
