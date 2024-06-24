/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.24",
// };

// networks: {
//   hardhat: {
//     chainId: 31337
//   }
// };

module.exports = {
  solidity: "0.8.16",
  paths: {
    artifacts: "./src/baackend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./srg/backend/test"
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
}