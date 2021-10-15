const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

 constructor() {
    this.rootOne = null;
  }

  root() {
    return this.rootOne;
  }

  add(data) {
    this.rootOne = host(this.rootOne, data);
    function host(node, specs) {
      if (node === null) {
        return new Node(specs);
      }
       if (specs < node.data) {
         node.left = host(node.left, specs);
      } else {
       
        node.right = host(node.right, specs);
      }
      if (specs === node.data) {
        return specs;
      }
     
      return node;
    }
  }
  has(data ) {
   let vertex = this.rootOne;
   while(vertex) {
     if (data == vertex.data) return true;
     if(data > vertex.data) {
       vertex = vertex.right;
     } else {
       vertex = vertex.left;
     }
   }
   return false;
  }
 
 find(data ) {
       let vertex = this.rootOne;

    while (vertex.data !== data) {
      vertex = (data < vertex.data) ? vertex.left : vertex.right;
        
      if (vertex === null) return null; 
    }

    return vertex;
  }


  remove(data) {
    this.rootOne = removeOne(this.rootOne, data);

    function removeOne(node, specs) {
      if(node === null) 
      return null;
      if(specs === node.data) {
        if(!node.left && !node.right) return null;
      
        if(node.left === null) {
          node = node.right;
          return node;
        }
        if(node.right === null) {
          node =node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeOne(node.right, minRight.data)

        return node;
      } else if(specs < node.data) {
        node.left = removeOne(node.left, specs);
        return node;
      } else if(specs > node.data) {
        node.right = removeOne(node.right, specs);
        return node; 
      } 
    }
    
    
  }

 
min() {
    let vertex = this.rootOne;
    let minOne = vertex.data;

    while(vertex){
      minOne = vertex.data;
      vertex = vertex.left;
    }

    return minOne;
  }

  max() {
    let vertex = this.rootOne;
    let maxOne = vertex.data;

    while(vertex){
      maxOne = vertex.data;
      vertex = vertex.right;
    }

    return maxOne;
  }

}
