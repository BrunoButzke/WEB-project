import React, { useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "20px",
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  })
);

export function HomePage() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const newEntry = React.useMemo(
    () => new URLSearchParams(location.search)?.get("title"),
    [location]
  );

  return (
    <Container component="main">
      <CssBaseline />
      <List className={classes.root}>
        <div onClick={() => history.push("/post?id=1")}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Guilherme" />
            </ListItemAvatar>
            <ListItemText
              primary="Aluno da UFSC"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Guilherme
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </div>
        <Divider variant="inset" component="li" />
        <div onClick={() => history.push("/post?id=2")}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="João" />
            </ListItemAvatar>
            <ListItemText
              primary="Aluno de Ciencia da Computação"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    João
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </div>
        <Divider variant="inset" component="li" />
        <div onClick={() => history.push("/post?id=3")}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Luiz" />
            </ListItemAvatar>
            <ListItemText
              primary="Procuro vaga desesperadamente"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Luiz
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </div>
        <Divider variant="inset" component="li" />
        {newEntry && (
          <div onClick={() => history.push("/post?id=4")}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="novo" />
              </ListItemAvatar>
              <ListItemText
                primary={newEntry}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {'<username>'}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </div>
        )}
      </List>
    </Container>
  );
}
