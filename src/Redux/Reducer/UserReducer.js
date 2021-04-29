import {
  USER_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
} from "../Actions/UserActions";

const initState = {
  isLoading: false,
  error: false,
  data: null,
};

const UserReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        data: payload,
      };
    case USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
        data: null,
      };
    default:
      return state;
  }
};

export default UserReducer;
