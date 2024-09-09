import { FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILURE, EDIT_USER_PROFILE_SUCCESS, EDIT_USER_PROFILE_FAILURE } from '../Actions/userActions';

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case FETCH_USER_PROFILE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case EDIT_USER_PROFILE_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case EDIT_USER_PROFILE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default userReducer;
