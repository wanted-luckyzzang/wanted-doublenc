import { ModalReduxState } from '../types';

export const OPEN = 'modal_open';
export const CLOSE = 'modal_close';

export const modalOpen = () => {
  return {
    type: OPEN,
  };
};
export const modalClose = () => {
  return {
    type: CLOSE,
  };
};

const initialState: ModalReduxState = {
  value: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN:
      return { value: true };
    case CLOSE:
      return { value: false };
    default:
      return state;
  }
}
