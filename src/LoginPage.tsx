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
import { isEmail, validatePassword } from "./Utils";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
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
  const [state, setState] = useState({email:'', emailValidate:{error:false, msg:''}});

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
            onChange={event => setState({...state, email: event.target.value})}
            error={state.emailValidate.error}
            helperText={state.emailValidate.msg} 
            onBlur={() => setState({...state, emailValidate:isEmail(state.email)})}   
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
  const classes = useStyles();
  const [state, setState] = useState({ 
    email:'', 
    password:'', 
    emailValidate:{error:false, msg:''}, 
    passwordValidate:{error:false, msg:''}
  });

  return (
    <div className={classes.registerSection}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form}>
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
                onChange={event => setState({...state, email: event.target.value})}
                error={state.emailValidate.error}
                helperText={state.emailValidate.msg} 
                onBlur={() => setState({...state, emailValidate:isEmail(state.email) })}   
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
                onChange={event => setState({...state, password: event.target.value})}
                error={state.passwordValidate.error}
                helperText={state.passwordValidate.msg}    
                onBlur={() => setState({...state, passwordValidate:validatePassword(state.password)})}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">User type?</FormLabel>
              <RadioGroup aria-required row aria-label="user type" name="user type">
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
  )
}

export function LoginPage() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <LoginSection/>
      <RegisterSection/>
    </div>
  );
}
