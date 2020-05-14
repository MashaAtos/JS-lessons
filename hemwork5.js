1. Given a sorted array and an element from that array. Find the index of that
element using binary search.

let array = [1,2,3,4,5,6,7,8,9,10];

function search(array, value) {

    let midpoint = Math.floor(array.length / 2);
    if (array[midpoint] === value)
        return midpoint;

    else if (array[midpoint] < value)
        return search(array.slice(midpoint+1),value) + midpoint + 1;
   else if (array[midpoint] > value) 
        return search(array.slice(0,midpoint),value);
}

console.log(array)
search(array, 4)


2.

let treeNodes = [
  { id: "root", children: [1, 2] },
  { id: 1, children: [3, 4] },
  { id: 2, children: [5] },
  { id: 3, children: [] },
  { id: 4, children: [6] },
  { id: 5, children: [] },
  { id: 6, children: [] }
];
function parseTree(treeNodes) {
  function findNode(tree, nodeId) {
    if (tree === null || tree === undefined) return undefined;
    if (tree.hasOwnProperty(nodeId)) return tree[nodeId];
    for (let subTree in tree) {
      let result = findNode(tree[subTree], nodeId);
      if (result !== undefined) return result;
    }
    return undefined;
  }
  let tree = {
    root: {}
  };
  for (let node of treeNodes) {
    let treeNode = findNode(tree, node.id);
    for(let childrenId of node.children) {
      treeNode[childrenId] = {};
    }
  }
  return tree;
}
let tree = parseTree(treeNodes);
console.log(tree);
