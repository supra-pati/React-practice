import {
  Button,
  FormControl,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";

const PAppTry = () => {
  const URL = "https://api.postalpincode.in/pincode/769015";
  //   const [dataPin, setDataPin] = useState({
  //     //   BranchType: "",
  //     district: "",
  //     name: "",
  //   });

  const [dataPin, setDataPin] = useState({});
  const [cityname, setCityname] = useState();
  const [district, setDistrict] = useState();
  let [fulldetails, setFulldetails] = useState([]);
  const [flag, setFlag] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    email: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onClickFormHandler = () => {
    axios.get(URL).then((response) => {
      setDataPin(response.data);
      console.log(response.data);
      // const firstObject = response.data[0];
      // const postOfficeArray = firstObject.PostOffice;
      // const firstPostOfficeItem = postOfficeArray[0];
      //   const CityName = firstPostOfficeItem.Name;
      //   fulldetails =
      //     firstPostOfficeItem.length > 0 &&
      //     firstPostOfficeItem.map((p) => (
      //       <ul>
      //         <li>{p.Name}</li>
      //         <li>{p.District}</li>
      //       </ul>
      //     ));

      // fulldetails =
      //   firstPostOfficeItem.length > 0 &&
      //   firstPostOfficeItem.map(({ Name, District }) => ({
      //     cityname: Name,
      //     district: District,
      //   }));
      // setFulldetails(fulldetails);
      // setCityname(fulldetails.Name);
      // console.log(fulldetails.Name);
      //   const DistrictName = firstPostOfficeItem.District;

      // console.log(firstPostOfficeItem.District);
      // setDistrict(firstPostOfficeItem.District);
      //   console.log(dataPin);
      //   setCityname(response.data.PostOffice.name);
      //   console.log(response.data.PostOffice.name);
      //   console.log(response.data[0].PostOffice[0]);

      // const postOfficeNames = data[0].PostOffice.map((office) => office.Name);
      // console.log(postOfficeNames);
    });
  };

  //   const arr = dataPin.PostOffice?.map(({ Name, District }) => ({
  //     ...dataPin,
  //     district: District,
  //     name: Name,
  //   }));

  //   const cityAndDistrict = dataPin[0].PostOffice.map(({ Name, District }) => ({
  //     cityname: Name,
  //     // setCityname(Name),
  //     district: District,
  //   }));
  //   console.log("name and dis=>  " + cityAndDistrict);

  return (
    <>
      {/* {dataPin.PostOffice?.map(({ Name, District }) => {
        <li>
          name: {Name} & district: {District}
        </li>;
      })} */}
      {/* {cityAndDistrict} */}
      <Stack
        spacing={4}
        direction="row"
        sx={{ marginLeft: "30rem", marginTop: "10rem" }}
      >
        <FormControl>
          <TextField
            required
            type="text"
            variant="filled"
            label="Name"
            onChange={handleChange}
          ></TextField>

          <TextField
            label="Password"
            type={showPassword ? "password" : "text"}
            value={formData.password}
            onChange={handleChange}
            variant="filled"
            name="password"
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            type="text"
            InputProps={{
              inputProps: {
                maxLength: 10,
              },
            }}
            variant="filled"
            label="phone"
            onChange={handleChange}
            helperText={
              formData.phone.length < 9
                ? "Please enter exactly ten digits."
                : "dlf"
            }
          ></TextField>
          {/* <TextField type="date" variant="filled" label="DOB"></TextField> */}

          {formData.age && parseInt(formData.age, 10) > 18 && (
            <TextField
              error
              type="email"
              variant="filled"
              label="Email"
              onChange={handleChange}
              helperText="Incorrect entry."
            ></TextField>
          )}
          <Button
            sx={{ backgroundColor: "crimson" }}
            variant="contained"
            onClick={() => alert("button clicked")}
          >
            Submit
          </Button>
        </FormControl>
      </Stack>

      {/* <input type="number" placeholder="pincode"></input>
      <button onClick={onClicFormHandler}>click</button>
      <hr></hr>
      Area == {cityname} - {district}
      {fulldetails} */}
    </>
  );
};
export default PAppTry;
