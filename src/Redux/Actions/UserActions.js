import axios from "axios";

export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";

const userRequest = (payload) => ({
  type: USER_REQUEST,
  payload,
});

const userSuccess = (payload) => ({
  type: USER_SUCCESS,
  payload,
});

const userFailure = (payload) => ({
  type: USER_FAILURE,
  payload,
});

export const userData = (payload) => async (dispatch) => {
  dispatch(userRequest());
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    dispatch(userSuccess(data));
  } catch (err) {
    dispatch(userFailure(err));
  }
};
