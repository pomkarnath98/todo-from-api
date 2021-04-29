import axios from "axios";

export const TODOS_REQUEST = "TODOS_REQUEST";
export const TODOS_SUCCESS = "TODOS_SUCCESS";
export const TODOS_FAILURE = "TODOS_FAILURE";

const todosRequest = (payload) => ({
  type: TODOS_REQUEST,
  payload,
});

const todosSuccess = (payload) => ({
  type: TODOS_SUCCESS,
  payload,
});

const todosFailure = (payload) => ({
  type: TODOS_FAILURE,
  payload,
});

export const todosData = (payload) => async (dispatch) => {
  dispatch(todosRequest());
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    const res = data.filter((e) => e.userId === Number(payload));
    dispatch(todosSuccess(res));
  } catch (err) {
    dispatch(todosFailure(err));
  }
};
