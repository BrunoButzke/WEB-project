import * as React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { useState } from "react";
import { validateEmail, validatePassword, config } from "./Utils";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "block",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  loginSection: {
    marginLeft: "auto",
  },
  registerSection: {
    marginRight: "auto",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginSection() {
  const classes = useStyles();
  const [state, setState] = useState({
    email: "",
    validateEmail: { error: false, msg: "" },
  });

  return (
    <div className={classes.loginSection}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={state.email}
              onChange={(event) =>
                setState({ ...state, email: event.target.value })
              }
              error={state.validateEmail.error}
              helperText={state.validateEmail.msg}
              onBlur={() =>
                setState({
                  ...state,
                  validateEmail: validateEmail(state.email),
                })
              }
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}

function RegisterSection() {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    validateEmail: { error: false, msg: "" },
    validatePassword: { error: false, msg: "" },
  });

  const handleRegister = async (evt: any) => {
    evt.preventDefault();
    const { email, password, firstName, lastName } = state;

    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName }),
    };

    const request = await fetch(`${config.API_URL}/signup`, options);

    if (request.status !== 201) {
      alert("An error occurred!");
      return false;
    }

    const { token } = await request.json();
    localStorage.setItem("token", token);
    history.push("/profile");
  };

  return (
    <div className={classes.registerSection}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} onSubmit={handleRegister}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={state.firstName}
                  onChange={(event) =>
                    setState({ ...state, firstName: event.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={state.lastName}
                  onChange={(event) =>
                    setState({ ...state, lastName: event.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={state.email}
                  onChange={(event) =>
                    setState({ ...state, email: event.target.value })
                  }
                  error={state.validateEmail.error}
                  helperText={state.validateEmail.msg}
                  onBlur={() =>
                    setState({
                      ...state,
                      validateEmail: validateEmail(state.email),
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event) =>
                    setState({ ...state, password: event.target.value })
                  }
                  error={state.validatePassword.error}
                  helperText={state.validatePassword.msg}
                  onBlur={() =>
                    setState({
                      ...state,
                      validatePassword: validatePassword(state.password),
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <FormLabel component="legend">User type?</FormLabel>
                <RadioGroup
                  aria-required
                  row
                  aria-label="user type"
                  name="user type"
                >
                  <FormControlLabel
                    value="student"
                    control={<Radio />}
                    label="Student"
                  />
                  <FormControlLabel
                    value="Company"
                    control={<Radio />}
                    label="Company"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export function LoginPage() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <LoginSection />
      <RegisterSection />
    </div>
  );
}
