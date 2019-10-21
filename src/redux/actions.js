import {
  CREATE_FILE,
  DELETE_FILE,
  EDIT_FILE,
  TOGGLE_FILE_INPUT,
  CHANGE_CURRENT_FILE_ID,
  ADD_TO_HISTORY
} from "./actionTypes";

export const createFile = (currentFileId, file) => ({
  type: CREATE_FILE,
  payload: {
    currentFileId,
    file
  }
});

export const deleteFile = fileId => {
  return {
    type: DELETE_FILE,
    payload: {
      fileId
    }
  };
};

export const editFile = (fileId, filename) => {
  return {
    type: EDIT_FILE,
    payload: {
      fileId,
      filename
    }
  };
};

export const toggleFileInput = () => ({
  type: TOGGLE_FILE_INPUT
});

export const changeCurrentFileId = id => {
  return {
    type: CHANGE_CURRENT_FILE_ID,
    payload: {
      id
    }
  };
};

export const addToHistory = stackType => {
  return {
    type: ADD_TO_HISTORY,
    payload: {
      stackType
    }
  };
};
