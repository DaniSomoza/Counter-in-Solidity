require("dotenv").config();

const { REACT_APP_ETHERSCAN_URL, CONTRACT_NAME, CONTRACT_REGISTRY } =
  process.env;

// TODO: Create deployment registry

async function main() {
  // A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  const Counter = await ethers.getContractFactory(CONTRACT_NAME);
  const CounterRegistry = await ethers.getContractFactory(CONTRACT_REGISTRY);

  // const counterRegistry = await CounterRegistry.deploy();
  // console.log(
  //   "counterRegistry contract deployed to address:",
  //   counterRegistry.address
  // );
  // const etherscanUrl = `${REACT_APP_ETHERSCAN_URL}/address/${counterRegistry.address}`;
  // console.log("Etherscan url: ", etherscanUrl);

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
