import { useCallback, useEffect, useState } from "react";
import CounterRegistryContractJSON from "../artifacts/src/contracts/CounterRegistry.sol/CounterRegistry.json";

const CONTRACT_REGISTRY_ADDRESS =
  process.env.REACT_APP_CONTRACT_REGISTRY_ADDRESS;

function useUserContractList({
  isMetamaskDefined,
  metamaskInstance,
  userAddress,
}) {
  const [contracts, setContracts] = useState([]);
  const [counterRegistryContract, setCounterRegistryContract] = useState([]);

  useEffect(() => {
    if (isMetamaskDefined && CONTRACT_REGISTRY_ADDRESS) {
      const counterRegistryContract = new metamaskInstance.eth.Contract(
        CounterRegistryContractJSON.abi,
        CONTRACT_REGISTRY_ADDRESS
      );
      setCounterRegistryContract(counterRegistryContract);
    }

    return () => {
      setContracts([]);
      setCounterRegistryContract();
    };
  }, [isMetamaskDefined, metamaskInstance]);

  const getUserContractList = useCallback(async () => {
    if (counterRegistryContract && userAddress) {
      try {
        const contracts = await counterRegistryContract.methods
          .findUserContracts(userAddress)
          .call();
        setContracts(contracts);
      } catch (e) {
        // TODO: ADD LOAD CONTRACTSs ERROR?
        setContracts([]);
      }
    }
  }, [counterRegistryContract, userAddress]);

  useEffect(() => {
    getUserContractList();
  }, [getUserContractList]);

  return {
    contracts,
    getUserContractList,
  };
}

export default useUserContractList;
