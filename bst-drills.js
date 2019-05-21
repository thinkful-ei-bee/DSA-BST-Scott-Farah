'use strict';

const BinarySearchTree = require('./bst');


//this function adds together the values of all nodes
//time complexity is O(n)
function tree(t){
  if(!t){
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}


//time complexity is O(n)?
function findHeight(node, counter=1) {
  if(!node.left && !node.right) {
    return counter; 
  }

  counter++;

  if(!node.left) {
    return findHeight(node.right, counter);
  }

  if(!node.right) {
    return findHeight(node.left, counter);
  }

  if (findHeight(node.left, counter) > findHeight(node.right, counter)) {
    return findHeight(node.left, counter);
  } else { return findHeight(node.right, counter); }
}



function main() {
  const BST = new BinarySearchTree;

  const nums = [3,1,4,6,9,2,5,7,10,11,12];
  nums.forEach(num => BST.insert(num, num));

  // const easyQ = 'EASYQUESTION';
  // easyQ.split('').forEach(letter => BST.insert(letter, letter));

  console.log(findHeight(BST));



  // console.log(BST);


}

main();