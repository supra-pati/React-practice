import {
  Avatar,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Checkbox,
  Button,
  Link,
  Typography,
} from "@mui/material";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import "./FormMuiApp.css";

const Login = () => {
  const avatarStyle = { backgroundColor: "#00af5a" };
  const btnSignIn = { marginBottom: 10 };
  return (
    <Grid>
      <Paper elevation={10} className="paperStyle">
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockPersonOutlinedIcon />
          </Avatar>
          <h2 style={{ margin: 0 }}>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          variant="standard"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          label="Password"
          variant="standard"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel control={<Checkbox />} label="Remember Me" />
        <Button style={btnSignIn} variant="contained" fullWidth>
          Sign In
        </Button>

        <Typography>
          <Link href="#" underline="none">
            Forgot password
          </Link>
        </Typography>
        <Typography>
          Don't have an account?&nbsp;
          <Link href="#" underline="none">
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Login;
