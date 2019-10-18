import { CREATE_FILE, TOGGLE_FILE_INPUT } from "./actionTypes";

export const createFile = (filename, parentId, isFolder) => ({
  type: CREATE_FILE,
  payload: {
    filename,
    parentId,
    isFolder
  }
});

export const toggleFileInput = () => ({
  type: TOGGLE_FILE_INPUT
});
