import { CREATE_FILE } from "../actionTypes";

const initialState = {
  filename: "root",
  createdAt: Date.now(),
  parent: null,
  children: [],
  isFolder: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_FILE: {
      // const { filename, parentId, isFolder } = action.payload;
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
