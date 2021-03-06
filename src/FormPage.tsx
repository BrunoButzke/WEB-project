import * as React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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

export function FormPage() {
  const classes = useStyles();
  const [title, setTitle] = React.useState<string>();
  const [description, setDescription] = React.useState<string>();
  const history = useHistory();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Make a post about yourself!
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={() => {
            history.push(`/?title=${title}&description=${description}`);
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            minRows={2}
            maxRows={20}
            name="description"
            label="Description"
            type="text"
            id="description"
            autoComplete="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <Grid container>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="reset"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
