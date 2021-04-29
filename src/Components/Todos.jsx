import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { todosData } from "../Redux/Actions/TodoActions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    minWidth: 275,
    margin: "10px",
    opacity: 0.8,
  },
  pos: {
    marginBottom: 5,
  },
}));

const Todos = () => {
  const { isLoading, error, data } = useSelector((state) => state.todo);
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(todosData(id));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.divContainer}>
      {error && <h3 className={classes.margin}>Something Went Wrong!</h3>}
      {isLoading && <CircularProgress className={classes.margin} />}
      {!isLoading &&
        !error &&
        data?.map((e) => (
          <Card
            style={{
              backgroundColor: `rgb(${Math.floor(
                Math.random() * 256
              )},${Math.floor(Math.random() * 256)},${Math.floor(
                Math.random() * 256
              )},0.5)`,
            }}
            key={e.id}
            className={classes.root}
          >
            <CardContent>
              <Typography variant="h5" component="h2">
                {e.title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {e.completed ? "Completed" : "Pending"}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};
export default Todos;
