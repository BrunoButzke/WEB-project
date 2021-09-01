import React from "react";
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
import { useHistory } from "react-router-dom";

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

  return (
    <Container component="main">
      <CssBaseline />
      <List className={classes.root}>
        <div onClick={() => history.push("/post?id=1")}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Bruno" />
            </ListItemAvatar>
            <ListItemText
              primary="Aluno de Sistemas da Informação"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Bruno
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
      </List>
    </Container>
  );
}
