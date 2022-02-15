import { CategoryReduxState } from 'src/types';

export const INIT = 'category_init';

export const categoryInit = () => {
  return {
    type: INIT,
  };
};

const initialState: CategoryReduxState = {
  data: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT:
      return {
        data: action.payload.data,
      };
    default:
      return state;
  }
}
