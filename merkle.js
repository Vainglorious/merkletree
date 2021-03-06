const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const leaves = [
  "0x59Bae22fC0D85D37aFD1053306D5e6B4Bb6bDEa6",
  "0x1699f86A565F60ffF567F23fc60Bb1EF9385b16e",
  "0xEDA4aEabaE2d559E7c5aEd03CC288bBf44A03134",
  "0x7fB98De44A955dA8D0A260433E4c42abC4a99d13",
  "0x8f989AEe480E9819c252e9518cDc2b58e6837930",
  "0x23857B6C939Baf3BFe9724abd6a269CB70FEbD29",
  "0x6c5ef1fab336ec3845b2186801a26109717bb022",
  "0x70d6eB2B3b9a2a7D6D67c3f24c246BFFC05b48Ca",
  "0xD732748071e38a48B4E9a3Ff1b2e7e87c0a39C2E",
  "0xefDc42f1D06Cb928974D69A2eCcfC2Da212DaaF9",
  "0xC30Ea36667fDaFFD9BC43b89Af8818deBa5A29AD",
  "0xD8f4061Fc5BE9EdD407f5c03361d2324b5bf5503",
  "0xe34133362298de9c9fce047c39039b94b56fbe29",
  "0xB802162900a4e2d1b2472B14895D56A73aE647E8",
  "0x96d2b5bfa179ce0979fef08ca7ecec497b050b75",
  "0x5fbe0aE423F1767028f150aA92545267507588eF",
  "0xcF6f5A68d94165081A634AdA997BE3A93426C467",
  "0x4C4A5490dEeFEfA16F49a1a48C9ACDC60F4117D0",
  "0x1E936cB14D3dBE800833492C95AECBFd7EF127c9",
  "0x280676491188F56fA386d9833d84702Ac1E24c71",
  "0xca11d10ceb098f597a0cab28117fc3465991a63c",
  "0xc5B35696bD01eD06CC78cEb93f64cd8EBB5870af",
  "0x7310e238f2260ff111a941059b023b3ebcf2d54e",
  "0xaB0CA98528c1C7911CbFA8Fb08abf5973f61E058",
  "0xf1e1c701b49b1dc2405a9e8ef40f9f88802b80fa",
  "0x2404d6857d7e90c3ed9e74e0d372a4d6d7399504",
  "0x885fe55d653fd389585498574d03a8fa124123a4",
  "0x193959c6CD6A6B36F150b173383260cfeEFc59f6",
  "0xF70ebFD828B993e2863670530C2ec62C049f37Ad",
  "0xe53c5B4F841570D193e05a27BFaFE1c554f14875",
  "0x06DAc6a2dcFa0f0dfB3e7E766515eEf5B2C6399a",
  "0x862464BbD83d5743F9Cf873C6eA3d187D0f909BF",
  "0xF54D81b2955832474a87a8DadA4a042a05b83180",
  "0x4cCc0AA065A37A3589e2Db6E165d2f8F522E9FA2",
  "0xeE49f82e58A1C2B306720D0c68047CBf70C11FB5",
  "0xBD7a1C16D7B3Af4AF6d1A0fD7437466d765656CE",
  "0x9901884Cc67c8F02C473a6C2493a40F32CDdfA24",
  "0xb02827A00baceC4c80b07FBE91968dB0662Beee6",
  "0x6E5b0de0aDD71e1052B11Abbfe6c433dD0466Fb4",
  "0xD3e9D60e4E4De615124D5239219F32946d10151D",
  "0xf34149c2d2fdd3955593f749755ea2a4f8e9ea41",
  "0x2525f1a08a2d5f037DDa969f2Fa1B56E4b4B47f3",
  "0x6154570ff4695Ed37e883afcCaa492c0886BCd0B",
  "0x86fEf6eC5320F6Cf9231f524aE89E198419CDC0F",
  "0x25428d29a6FA3629ff401c6DADe418B19CB2D615",
  "0xd54c1841e64E84c9C63FcF6C60763f0C751C3Aad",
  "0x800ebacd1971ed9c50ae9b9412a78fe824bd31b6",
  "0xd5cb4Ce53100100DC4E59366B8A807650898bBD5",
  "0x4fA7Fc217d2Da64b617eED770286fCC48BaF4022",
  "0xc734fce96D3DD328FD8bED5922CDeE54BA3beeb6",
].map((v) => keccak256(v));
// console.log(MerkleTree);

// const tree = new MerkleTree(leaves, keccak256);

const tree = new MerkleTree(leaves, keccak256, { sort: true });
// console.log(tree);
const root = tree.getHexRoot();
console.log(root);

const leaf = keccak256("0xc734fce96D3DD328FD8bED5922CDeE54BA3beeb6");
const proof = tree.getHexProof(leaf);
console.log(proof);

// const contract = ... // initialize contract
// console.log(await contract.mintAllowList.call(root, leaf, proof))
