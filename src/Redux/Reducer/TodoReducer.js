import {
  TODOS_FAILURE,
  TODOS_REQUEST,
  TODOS_SUCCESS,
} from "../Actions/TodoActions";

const initState = {
  isLoading: false,
  error: false,
  data: null,
};

const TodoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        data: payload,
      };
    case TODOS_FAILURE:
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

export default TodoReducer;
