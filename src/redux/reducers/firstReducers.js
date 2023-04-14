import { GET_HIP_HOP, GET_POP, GET_ROCK } from "../actions";

const initialState = {
  rock: [],
  pop: [],
  hiphop: [],
};

const firstReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCK:
      return {
        ...state,
        rock: action.payload,
      };
    case GET_POP:
      return {
        ...state,
        pop: action.payload,
      };
    case GET_HIP_HOP:
      return {
        ...state,
        hiphop: action.payload,
      };
    default:
      return state;
  }
};

export default firstReducers;
