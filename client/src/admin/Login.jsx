import React, { useState } from "react";
import Sha256 from "crypto-js/sha256";

import { useHistory } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  TextField,
  CircularProgress,
  Button,
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import { Redirect } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [validData, setValidData] = useState(true);

  const updateUser = (e) => {
    setUser(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (props) => {
    if (user === "") {
      //   setState({ user_error: 'Required' });
      setValidData(false);
    }
    if (password === "") {
      //   setState({ password_error: 'Required' });
      setValidData(false);
    }

    if (validData) {
      if (
        Sha256(user.toString()).toString() === Sha256("").toString() &&
        Sha256(password.toString()).toString() === Sha256("").toString()
      ) {
        history.push("/admin/dashboard");
      } else {
      }
    }
  };
  return (
    <Container maxWidth="xs">
      <Box
        textAlign="center"
        p="24px"
        mt="50px"
        boxShadow="2"
        borderRadius="10px"
      >
        <Typography variant="h3">Lookslabel</Typography>
        <Typography variant="h5">Login</Typography>
        <br />
        <br />
        <TextField
          label="User"
          id="outlined-size-small"
          variant="outlined"
          name="user"
          value={user}
          //   error={user_error != null}
          //   helperText={user_error}
          onChange={updateUser}
          fullWidth
          margin="normal"
          size="small"
        />
        <TextField
          label="Password"
          id="outlined-size-small"
          variant="outlined"
          type="password"
          name="password"
          //   error={password_error != null}
          //   helperText={password_error}
          value={password}
          onChange={updatePassword}
          fullWidth
          margin="normal"
          size="small"
        />
        <br />
        <br />
        {/* {state.loading ? <CircularProgress size={30} thickness={4} /> : null} */}

        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="small"
          disableElevation
          style={{ height: "50px" }}
          onClick={login}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
