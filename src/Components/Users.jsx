import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { userData } from "../Redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  divContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    marginTop: "50px",
  },
  root: {
    maxWidth: 345,
    margin: "10px",
  },
  card: {
    [theme.breakpoints.only("sm")]: {
      display: "flex",
      flexDirection: "row",
    },
  },
}));

const Users = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userData());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={classes.divContainer}>
        {error && <h3 className={classes.margin}>Something Went Wrong!</h3>}
        {isLoading && <CircularProgress className={classes.margin} />}
        {!isLoading &&
          !error &&
          data?.map((e) => (
            <Card key={e.id} className={classes.root}>
              <CardActionArea className={classes.card}>
                <CardMedia
                  component="img"
                  alt="User Image"
                  height="140"
                  image={`https://via.placeholder.com/950/${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)}`}
                  title="User Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {e.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="div"
                  >
                    <div>
                      <a href={`mailto: ${e.email}`}>{e.email}</a>
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/${e.id}`}>
                  <Button size="small" color="primary">
                    Show Todos
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
      </div>
    </>
  );
};
export default Users;
