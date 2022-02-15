export const INIT = 'brand_init';

export const brandInit = () => {
  return {
    type: INIT,
  };
};

export default function reducer(state = null, action) {
  switch (action.type) {
    case INIT:
      return {
        data: action.payload.data,
      };
    default:
      return state;
  }
}
