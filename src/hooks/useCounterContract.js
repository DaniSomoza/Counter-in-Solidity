import { useCallback, useEffect, useState } from "react";
import CounterContractJSON from "../artifacts/contracts/Counter.sol/Counter.json";

function useCounterContract(
  metamaskInstance,
  isMetamaskDefined,
  userAddress,
  contractAddress
) {
  const [counterContract, setCounterContract] = useState();
  const [counter, setCounter] = useState();

  // load your selected Contract (based on contract address and ABI)
  useEffect(() => {
    if (isMetamaskDefined && contractAddress) {
      const counterContract = new metamaskInstance.eth.Contract(
        CounterContractJSON.abi,
        contractAddress
      );
      setCounterContract(counterContract);
    }

    return () => {
      setCounterContract();
    };
  }, [isMetamaskDefined, metamaskInstance, contractAddress]);

  // update counter with the current value
  const updateCounter = useCallback(async () => {
    if (counterContract) {
      try {
        const counter = await counterContract.methods.counter().call();
        setCounter(counter);
      } catch (e) {
        // TODO: ADD SMART CONTRACT ERROR
        setCounterContract();
      }
    }
  }, [counterContract]);

  useEffect(() => {
    updateCounter();
  }, [updateCounter]);

  const incrementCounter = useCallback(() => {
    if (counterContract) {
      counterContract.methods.increment().send({
        from: userAddress,
      });
    }
  }, [counterContract, userAddress]);

  const decrementCounter = useCallback(() => {
    if (counterContract) {
      counterContract.methods.decrement().send({
        from: userAddress,
      });
    }
  }, [counterContract, userAddress]);

  const resetCounter = useCallback(() => {
    if (counterContract) {
      counterContract.methods.reset().send({
        from: userAddress,
      });
    }
  }, [counterContract, userAddress]);

  // subscribe to CounterChanged event to update counter
  useEffect(() => {
    if (counterContract) {
      counterContract.events.CounterChanged().on("data", () => {
        updateCounter();
      });
    }
  }, [counterContract, updateCounter]);

  const isCounterContractLoading = !!contractAddress && !counterContract;
  const contractDetailsUrl = `${process.env.REACT_APP_ETHERSCAN_URL}/address/${contractAddress}`;
  return {
    counter,
    updateCounter,

    incrementCounter,
    decrementCounter,
    resetCounter,

    isCounterContractLoading,
    contractDetailsUrl,
  };
}

export default useCounterContract;
