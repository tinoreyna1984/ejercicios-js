/**
 * Algoritmo del árbol binario de búsqueda
 */

// nodo del árbol
class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// árbol binario de búsqueda con sus métodos
class BinarySeachTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value, null, null);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      let isFound = false;
      while (!isFound) {
        if (value === currentNode.value) {
          isFound = true;
          return;
        }
        if (value !== currentNode.value) {
          if (value < currentNode.value) {
            if (!currentNode.left) {
              currentNode.left = newNode;
              isFound = true;
              return;
            } else {
              currentNode = currentNode.left;
            }
          }
          if (value > currentNode.value) {
            if (!currentNode.right) {
              currentNode.right = newNode;
              isFound = true;
              return;
            } else {
              currentNode = currentNode.right;
            }
          }
        }
      }
    }
  }
  search(value){
    let currentNode = this.root;
    let isFound = false;
    while(!isFound){
      if(value === currentNode.value){
        isFound = true;
        return true;
      }
      if(value !== currentNode.value){
        if(value < currentNode.value){
          if(!currentNode.left){
            return false;
          }else{
            currentNode = currentNode.left;
          }
        }
        if(value > currentNode.value){
          if(!currentNode.right){
            return false;
          }else{
            currentNode = currentNode.right;
          }
        }
      }
    }      
  }
  remove(value){
    let currentNode = this.root;
    let parentNode = null;
    let isFound = false;
    while(!isFound){
      if(value === currentNode.value){
        isFound = true;
      }
      if(value !== currentNode.value){
        if(value < currentNode.value){
          if(!currentNode.left){
            return false;
          }else{
            parentNode = currentNode;
            currentNode = currentNode.left;
          }
        }
        if(value > currentNode.value){
          if(!currentNode.right){
            return false;
          }else{
            parentNode = currentNode;
            currentNode = currentNode.right;
          }
        }
      }
    }
    if(currentNode.left && currentNode.right){
      let minNode = currentNode.right;
      let minParent = currentNode;
      while(minNode.left){
        minParent = minNode;
        minNode = minNode.left;
      }
      currentNode.value = minNode.value;
      if(minParent === currentNode){
        currentNode.right = minNode.right;
      }else{
        minParent.left = minNode.right;
      }
    }else if(currentNode.left){
      if(parentNode.left === currentNode){
        parentNode.left = currentNode.left;
      }else{
        parentNode.right = currentNode.left;
      }
    }else if(currentNode.right){
      if(parentNode.left === currentNode){
        parentNode.left = currentNode.right;
      }else{
        parentNode.right = currentNode.right;
      }
    }else{
      if(parentNode.left === currentNode){
        parentNode.left = null;
      }else{
        parentNode.right = null;
      }
    }
  }
  change(value, newValue){
    let currentNode = this.root;
    let isFound = false;
    while(!isFound){
      if(value === currentNode.value){
        isFound = true;
      }
      if(value !== currentNode.value){
        if(value < currentNode.value){
          if(!currentNode.left){
            return false;
          }else{
            currentNode = currentNode.left;
          }
        }
        if(value > currentNode.value){
          if(!currentNode.right){
            return false;
          }else{
            currentNode = currentNode.right;
          }
        }
      }
    }
    currentNode.value = newValue;
  }
}

let tree = new BinarySeachTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(6);
tree.insert(7);
tree.insert(20);

console.log(tree);

tree.remove(10);

console.log(tree);

tree.change(15, 100);

console.log(tree);

