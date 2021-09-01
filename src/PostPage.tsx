import * as React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "30px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function PostPage() {
  const location = useLocation();
  const [postId, setPostId] = React.useState<string>();

  useEffect(() => {
    setPostId(location.search.split("id=").pop());
  }, [location]);

  const posts = React.useMemo(() => {
    switch (postId) {
      case "1":
        return (
          <PostCard
            title={"Aluno da UFSC"}
            username={"Guilherme"}
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s
        with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.`}
          />
        );
      case "2":
        return (
          <PostCard
            title={"Aluno de Ciência da Computação"}
            username={"João"}
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s
    with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum.`}
          />
        );
      case "3":
        return (
          <PostCard
            title={"Procuro vaga desesperadamente"}
            username={"Luiz"}
            description={`Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s
    with the release of Letraset sheets containing Lorem Ipsum passages,
    and more recently with desktop publishing software like Aldus
    PageMaker including versions of Lorem Ipsum.`}
          />
        );
    }
  }, [postId]);

  return (
    <div>
      <CssBaseline />
      {posts}
    </div>
  );
}

interface PostCardProps {
  title: string;
  username: string;
  description: string;
}

function PostCard(props: PostCardProps) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            {props.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.username}
          </Typography>
          <Typography variant="body2" component="p">
            {props.description}
            <br />
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <div>
        <Button size="small">Entrar em contato</Button>
      </div>
    </>
  );
}
