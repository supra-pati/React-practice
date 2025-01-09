import { Button, FormControl } from "@mui/material";
import Stack from "@mui/material/Stack";
// import DeleteIcon from "@mui/icons-material/Delete";
import ErrorIcon from "@mui/icons-material/Error";
import TextField from "@mui/material/TextField";

const ButtonMUI = () => {
  return (
    <>
      <Button variant="outlined">hello</Button>
      <Button
        variant="outlined"
        onClick={() => {
          alert("clicked contained button");
          console.log("you have clicked contained button");
        }}
      >
        Contained
      </Button>
      <br></br>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error" startIcon={<ErrorIcon />}>
          Error
        </Button>
      </Stack>
      <FormControl>
        <Stack spacing={4} direction="row">
          <TextField type="text" variant="outlined" defaultValue="Outlined" />
          <TextField type="text" variant="filled" placeholder="Name" />
        </Stack>
      </FormControl>
    </>
  );
};
export default ButtonMUI;
