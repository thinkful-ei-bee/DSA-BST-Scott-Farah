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


function isBST(node) {
  if(!node.left && !node.right) {
    return true;
  }

  if (!node.left){
    return isBST(node.right);
  }
  if(!node.right){
    return isBST(node.left);
  }

  if (node.left.key > node.key || node.right.key < node.key) {
    return false;
  } else  { 
    return isBST(node.right) && isBST(node.left);
  }
}



function _findMax(node) {
  if(!node.right) {
    return node;
  }
  return _findMax(node.right);
}

function findSecondLargest(node){
  if(!node.left) {
    return node.parent;
  } else {
    return _findMax(node.left);
  }
}

function thirdLargest(node) {
  if(!node.left && !node.right) {
    return 'tree is empty!!!!!';
  }

  const maxNum = _findMax(node);
  return findSecondLargest(findSecondLargest(maxNum)).key;
}


//3
//546
//102
//3
//546
//120




function main() {
  const BST = new BinarySearchTree;

  const nums = [3,1,4,6,9,2,5,7,11,12];
  const nums2 = [5, 4, 3, 1];
  nums.forEach(num => BST.insert(num, num));
  //nums2.forEach(num => BST.insert(num, num));

  // const easyQ = 'EASYQUESTION';
  // easyQ.split('').forEach(letter => BST.insert(letter, letter));

  //console.log(findHeight(BST));
  console.log(BST);
  //console.log(isBST(BST))
  console.log(thirdLargest(BST));

}

main();

