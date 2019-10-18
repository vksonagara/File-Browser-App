import { TOGGLE_FILE_INPUT } from "../actionTypes";

const initialState = {
  isFileInputVisible: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FILE_INPUT: {
      const isFileInputVisible = !state.isFileInputVisible;
      return {
        ...state,
        isFileInputVisible
      };
    }
    default:
      return state;
  }
}
