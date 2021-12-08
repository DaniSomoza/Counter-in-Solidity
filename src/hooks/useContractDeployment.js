import { useState } from "react";
import { useNavigate } from "react-router";
import CounterContractJSON from "../artifacts/src/contracts/Counter.sol/Counter.json";
import { HOME_PATH } from "../routes/routes";

function useContractDeployment(
  metamaskInstance,
  isMetamaskDefined,
  userAddress
) {
  const navigate = useNavigate();
  const [transactionDeploymentHash, setTransactionDeploymentHash] = useState();
  const [contractAddress, setContractAddress] = useState();

  const deployContract = () => {
    if (isMetamaskDefined) {
      const newCounterContract = new metamaskInstance.eth.Contract(
        CounterContractJSON.abi
      );
      newCounterContract
        .deploy({
          data: CounterContractJSON.bytecode,
        })
        .send({
          from: userAddress,
        })
        .on("error", function (error) {
          console.log("Error: ", error);
        })
        .on("transactionHash", function (transactionDeploymentHash) {
          console.log("transactionDeploymentHash: ", transactionDeploymentHash);
          setTransactionDeploymentHash(transactionDeploymentHash);
        })
        .on("receipt", function (receipt) {
          console.log(receipt.contractAddress); // contains the new contract address
          setContractAddress(receipt.contractAddress);
        })
        // .on("confirmation", function (confirmationNumber, receipt) {
        //   console.log("confirmationNumber: ", confirmationNumber);
        // })
        .then(function (newContractInstance) {
          console.log(newContractInstance.options.address); // instance with the new contract address
          setTransactionDeploymentHash();
          setContractAddress(newContractInstance.options.address);
          navigate(
            `${HOME_PATH}?contractAddress=${newContractInstance.options.address}`
          );
        });
    }
  };

  const isDeploymentLoading = !!transactionDeploymentHash;

  const transactionDeploymentUrl = `${process.env.REACT_APP_ETHERSCAN_URL}/tx/${transactionDeploymentHash}`;

  return {
    deployContract,
    transactionDeploymentHash,
    isDeploymentLoading,
    contractAddress,
    transactionDeploymentUrl,
  };
}

export default useContractDeployment;
