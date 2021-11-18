const MerkleTree = require("merkletreejs");
const keccak256 = require("keccak256");

const leaves = [
  "0x1CE565FE591573b7041f7D418568bd672Cff4B97",
  "0x8803DD1eA459dAdf25f8c10D29DE9c177cC49530",
].map((v) => keccak256(v));
console.log(leaves);

const tree = new MerkleTree(leaves, keccak256, { sort: true });
console.log(tree);
