import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Paper, Tab } from "@mui/material";
import { useState } from "react";
import Login from "../Login";
import SignUp from "../SignUp";

const SignInOutContainer = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const boxStyle = {
    width: 310,
    height: "0 auto",
    margin: "0 auto",
  };
  return (
    <>
      <Paper style={boxStyle}>
        <TabContext value={value}>
          <TabList onChange={handleChange}>
            <Tab label="Sign In" sx={{ width: "50%" }} value="1" />
            <Tab label="Sign Up" sx={{ width: "50%" }} value="2" />
          </TabList>

          <TabPanel sx={{ padding: 0 }} value="1">
            <Login></Login>
          </TabPanel>
          <TabPanel sx={{ padding: 0 }} value="2">
            <SignUp></SignUp>
          </TabPanel>
        </TabContext>
      </Paper>
    </>
  );
};
export default SignInOutContainer;
