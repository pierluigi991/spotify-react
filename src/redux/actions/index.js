export const GET_ROCK = "GET_ROCK";
export const GET_POP = "GET_POP";
export const GET_HIP_HOP = "GET_HIP_HOP";
export const GET_QUERY = "GET_QUERY";
export const GET_SEARCH_MUSIC = "GET_SEARCH_MUSIC";
export const RESET_SEARCH = "RESET_SEARCH";

export const getQueryAction = (query) => ({ type: GET_QUERY, payload: query });
export const resetSearchAction = () => ({ type: RESET_SEARCH, payload: [] });

export const getRockAction = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        let tracks = await response.json();

        dispatch({ type: GET_ROCK, payload: tracks.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPopAction = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        let tracks = await response.json();
        dispatch({ type: GET_POP, payload: tracks.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getHipHopAction = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        let tracks = await response.json();
        dispatch({ type: GET_HIP_HOP, payload: tracks.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSeachMusicAction = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        let tracks = await response.json();
        dispatch({ type: GET_SEARCH_MUSIC, payload: tracks.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
