import {
  SEARCH_QUOTES_ERROR,
  SEARCH_QUOTES_LOADING,
  SEARCH_QUOTES_SUCCESS,
  ADD_PAGINATION
} from "../actions/initial-actions";

const initialState = {
  error: undefined,
  data: [],
  isLoading: false,
  category: '',
  pagination: {},
  size: 0
};

const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QUOTES_LOADING:
      return { ...state, isLoading: true, data: [] };
    case SEARCH_QUOTES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        pagination: {
          start: 0,
          end: 10,
        },
        size: action.size,
        category: action.category
      };
    case ADD_PAGINATION:
      return {
        ...state,
        pagination: action.pagination
      }
    case SEARCH_QUOTES_ERROR:
      return { ...state, isLoading: false, data: [], error: action.error };
    default:
      return state;
  }
};

export default initialReducer;
