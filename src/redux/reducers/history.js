import { ADD_TO_HISTORY, CHANGE_CURRENT_FILE_ID } from "../actionTypes";
import { deepCopy } from "../../lib";

const initialState = {
  backwardStack: [],
  forwardStack: [],
  currentFileId: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_HISTORY: {
      const { stackType } = action.payload;
      const history = deepCopy(state);
      if (stackType === "backward") {
        history.forwardStack.push(history.currentFileId);
        history.currentFileId = history.backwardStack.pop();
      } else if (stackType === "forward") {
        history.backwardStack.push(history.currentFileId);
        history.currentFileId = history.forwardStack.pop();
      }
      return {
        ...state,
        ...history
      };
    }
    case CHANGE_CURRENT_FILE_ID: {
      const { id } = action.payload;
      const history = deepCopy(state);
      history.backwardStack.push(history.currentFileId);
      history.forwardStack.pop();
      history.currentFileId = id;
      return {
        ...state,
        ...history
      };
    }
    default:
      return state;
  }
}
