require("dotenv").config();
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

const RINKEBY_CHAIN_ID = 4;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    localhost: {},
    rinkeby: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      network_id: RINKEBY_CHAIN_ID,
      gas: 10000000,
    },
  },
  paths: {
    sources: "./src/contracts",
    tests: "./src/test",
    cache: "./src/cache",
    artifacts: "./src/artifacts",
  },
};
