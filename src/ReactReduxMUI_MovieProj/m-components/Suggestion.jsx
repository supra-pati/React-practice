import { TextField, Paper, MenuItem, Grid } from "@mui/material";
import Downshift from "downshift";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { COVER_PLACEHOLDER, IMAGE_PATH } from "../config";
import { searchMovies } from "../redux/Search";

const Suggestion = ({ movies }) => {
  const dispatch = useDispatch();

  const inputOnChange = (event) => {
    if (!event.target.value) {
      return;
    }
    dispatch(searchMovies(event.target.value));
  };

  return (
    <Downshift>
      {({
        getInputProps,
        getMenuProps,
        getItemProps,
        isOpen,
        inputValue,
        highLightedIndex,
        selectedItem,
      }) => (
        <div>
          <TextField
            id="search"
            placeholder="Search"
            sx={{ mb: 5 }}
            fullWidth={true}
            variant="standard"
            InputProps={{
              ...getInputProps({
                onChange: inputOnChange,
              }),
            }}
          />
          {isOpen ? (
            <Paper square={true} {...getMenuProps()}>
              {movies.results
                .slice(0, 10)
                .filter(
                  (item) =>
                    !inputValue ||
                    item.title.toLoweCase().includes(inputValue.toLowerCase())
                )
                .map((item, index) => (
                  <MenuItem
                    {...getItemProps({
                      item,
                      key: item.id,
                      selected: highLightedIndex === index,
                      style: {
                        fontWeight: selectedItem === item ? 500 : 400,
                      },
                    })}
                  >
                    <Link to={`/movie/${item.id}`}>
                      <Grid container={true} spacing={8}>
                        <Grid item={true}>
                          {item.poster_path ? (
                            <img
                              src={`${IMAGE_PATH}/w92${item.poster_path}`}
                              alt={item.title}
                            ></img>
                          ) : (
                            <img src={COVER_PLACEHOLDER} alt={item.title}></img>
                          )}
                        </Grid>
                        <Grid item={true}></Grid>
                      </Grid>
                    </Link>
                  </MenuItem>
                ))}
            </Paper>
          ) : null}
        </div>
      )}
    </Downshift>
  );
};
export default Suggestion;
