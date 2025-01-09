import { Button, Stack, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";

const PincodeApp = () => {
  const [cityname, setCityname] = useState();
  const [dataP, setDataP] = useState({ name: "", state: "" });
  const URL = "https://api.postalpincode.in/pincode/757001";
  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataP((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onClickFormHandler = () => {
    axios.get(URL).then((response) => {
      setDataP(response.data);
      console.log(response.data);
      const ponames = response.data[0].PostOffice.map((office) => office.Name);
      console.log("name of city =>  " + ponames);
      // setDataP((prevdataP) => ({...prevdataP,name:ponames}));
      // console.log(
      //   "name of city =>  " +
      //     response.data[0].PostOffice.map((office) => office.Name)
      // );
    });
  };

  return (
    <Stack
      spacing={4}
      direction="row"
      sx={{ marginLeft: "30rem", marginTop: "10rem" }}
    >
      <form>
        <TextField
          required
          type="text"
          variant="outlined"
          label="Pincode-Name"
          // value={dataP.name}
          onChange={handleChange}
        ></TextField>
        <Button variant="contained" onClick={onClickFormHandler}>
          click
        </Button>
      </form>
    </Stack>
  );
};
export default PincodeApp;
