import {SET_TITLE} from './HomeActions';

const initialState: HomeState = {
  title: '',
};

const reducer = (
  state: HomeState = initialState,
  action: HomeActionTypes,
): HomeState => {
  switch (action.type) {
    case SET_TITLE:
      return {...state, title: action.title};
    default:
      return state;
  }
};

export default reducer;
