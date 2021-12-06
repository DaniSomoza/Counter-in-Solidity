require("dotenv").config();

const { REACT_APP_ETHERSCAN_URL, CONTRACT_NAME } = process.env;

async function main() {
  // A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  const Counter = await ethers.getContractFactory(CONTRACT_NAME);

  // Start deployment, returning a promise that resolves to a contract object
  const counter = await Counter.deploy();
  console.log("Counter contract deployed to address:", counter.address);
  const etherscanUrl = `${REACT_APP_ETHERSCAN_URL}/address/${counter.address}`;
  console.log("Etherscan url: ", etherscanUrl);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
