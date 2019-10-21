import { CREATE_FILE, DELETE_FILE, EDIT_FILE } from "../actionTypes";
import {
  addFileToTree,
  deleteFileFromTree,
  editFileFromTree,
  deepCopy
} from "../../lib";

const initialState = {
  filename: "root",
  id: 0,
  createdAt: Date.now(),
  isFolder: true,
  children: [
    {
      filename: "documents",
      id: 1,
      createdAt: Date.now(),
      isFolder: true,
      children: [
        {
          filename: "desktop",
          id: 3,
          createdAt: Date.now(),
          isFolder: false,
          children: []
        }
      ]
    },
    {
      filename: "photo.jpeg",
      id: 2,
      createdAt: Date.now(),
      isFolder: false,
      children: []
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_FILE: {
      const { currentFileId, file } = action.payload;
      const fileTree = deepCopy(state);
      addFileToTree(fileTree, currentFileId, file);
      return {
        ...state,
        ...fileTree
      };
    }
    case DELETE_FILE: {
      const { fileId } = action.payload;
      const fileTree = deepCopy(state);
      deleteFileFromTree(fileTree, fileId);
      return {
        ...state,
        ...fileTree
      };
    }

    case EDIT_FILE: {
      const { fileId, filename } = action.payload;
      const fileTree = deepCopy(state);
      editFileFromTree(fileTree, fileId, filename);
      return {
        ...state,
        ...fileTree
      };
    }

    default:
      return state;
  }
}
