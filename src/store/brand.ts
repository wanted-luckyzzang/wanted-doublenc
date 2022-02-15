import { ObjStringStyle } from 'src/types';

export const INIT = 'brand_init';

export const brandInit = () => {
  return {
    type: INIT,
  };
};

const initialState: ObjStringStyle = {};

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
