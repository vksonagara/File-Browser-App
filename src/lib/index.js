export function searchFileTree(fileTree, id) {
  //recursive dfs to search the fileTree and return that file node
  if (fileTree.id === id) return fileTree;

  for (let i = 0; i < fileTree.children.length; i++) {
    let file = searchFileTree(fileTree.children[i], id);
    if (file) return file;
  }

  return null;
}

export function addFileToTree(fileTree, currentFileId, file) {
  //iterative dfs to find and add the file to currentFileId
  const stack = [];
  stack.push(fileTree);

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode.id === currentFileId) {
      currentNode.children.push(file);
    }
    for (let i = 0; i < currentNode.children.length; i++) {
      stack.push(currentNode.children[i]);
    }
  }
}

export function deleteFileFromTree(fileTree, fileId) {
  //dfs to delete a file node
  for (let i = 0; i < fileTree.children.length; i++) {
    if (fileTree.children[i].id === fileId) {
      fileTree.children.splice(i, 1);
      return;
    } else {
      deleteFileFromTree(fileTree.children[i], fileId);
    }
  }
}

export function editFileFromTree(fileTree, fileId, filename) {
  //dfs to edit a file node
  for (let i = 0; i < fileTree.children.length; i++) {
    if (fileTree.children[i].id === fileId) {
      fileTree.children[i].filename = filename;
      return;
    } else {
      editFileFromTree(fileTree.children[i], fileId, filename);
    }
  }
}

export function deepCopy(obj) {
  //cloning whole object, even the references inside the object properties
  return JSON.parse(JSON.stringify(obj));
}

export function getFilePathArray(fileTree, fileId) {
  const stack = [];
  const path = [];
  stack.push(fileTree);
  while (stack.length > 0) {
    const currentNode = stack.pop();
    path.push({ fileId: currentNode.id, filename: currentNode.filename });
    if (currentNode.id === fileId) {
      return path;
    }
    for (let i = 0; i < currentNode.children.length; i++) {
      stack.push(currentNode.children[i]);
    }
    if (currentNode.children.length === 0) {
      path.pop();
    }
  }
}
