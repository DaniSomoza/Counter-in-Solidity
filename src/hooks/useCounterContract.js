import { useCallback, useEffect, useState } from "react";
import CounterContractJSON from "../artifacts/src/contracts/Counter.sol/Counter.json";

function useCounterContract(
  metamaskInstance,
  isMetamaskDefined,
  userAddress,
  contractAddress
) {
  const [counterContract, setCounterContract] = useState();
  const [counter, setCounter] = useState();

  const [pastEvents, setPastEvents] = useState([]);
  const [newEvents, setNewEvents] = useState([]);

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
      setCounter();
      setPastEvents([]);
      setNewEvents([]);
    };
  }, [isMetamaskDefined, metamaskInstance, contractAddress]);

  // update counter value with the current value
  const updateCounter = useCallback(async () => {
    if (counterContract) {
      try {
        const counter = await counterContract.methods.counter().call();
        setCounter(counter);
      } catch (e) {
        // TODO: ADD LOAD COUNTER ERROR?
        setCounterContract();
      }
    }
  }, [counterContract]);

  // update past events
  const getPastContractEvents = useCallback(async () => {
    if (counterContract) {
      try {
        counterContract.getPastEvents(
          "CounterChanged",
          { fromBlock: 0, toBlock: "latest" },
          (error, events) => {
            setPastEvents(events.reverse());
            console.log(events);
            console.log(error);
          }
        );
      } catch (e) {
        // TODO: ADD LOAD EVENTS ERROR
        setPastEvents([]);
      }
    }
  }, [counterContract]);

  // update counter data
  useEffect(() => {
    updateCounter();
  }, [updateCounter]);

  // update event data
  useEffect(() => {
    getPastContractEvents();
  }, [getPastContractEvents]);

  const incrementCounter = useCallback(() => {
    if (counterContract) {
      counterContract.methods
        .increment()
        .send({
          from: userAddress,
        })
        .on("transactionHash", function (transactionHash) {
          const newEvent = {
            id: transactionHash,
            isPending: true,
            transactionHash,
            returnValues: {
              eventType: "increment",
              userAddress,
            },
          };
          setNewEvents((newEvents) => [newEvent, ...newEvents]);
        });
    }
  }, [counterContract, userAddress]);

  const decrementCounter = useCallback(() => {
    if (counterContract) {
      counterContract.methods
        .decrement()
        .send({
          from: userAddress,
        })
        .on("transactionHash", function (transactionHash) {
          const newEvent = {
            id: transactionHash,
            isPending: true,
            transactionHash,
            returnValues: {
              eventType: "decrement",
              userAddress,
            },
          };
          setNewEvents((newEvents) => [newEvent, ...newEvents]);
        });
    }
  }, [counterContract, userAddress]);

  const resetCounter = useCallback(() => {
    if (counterContract) {
      counterContract.methods
        .reset()
        .send({
          from: userAddress,
        })
        .on("transactionHash", function (transactionHash) {
          const newEvent = {
            id: transactionHash,
            isPending: true,
            transactionHash,
            returnValues: {
              eventType: "reset",
              userAddress,
            },
          };
          setNewEvents((newEvents) => [newEvent, ...newEvents]);
        });
    }
  }, [counterContract, userAddress]);

  // subscribe to CounterChanged event to update counter
  useEffect(() => {
    if (counterContract) {
      counterContract.events
        .allEvents({
          event: "CounterChanged",
        })
        .on("data", (event) => {
          console.log("CounterChanged event: ", event);
          setNewEvents((newEvents) => {
            const filteredEvents = newEvents.filter(
              (e) => event.transactionHash !== e.transactionHash
            );

            return [event, ...filteredEvents];
          });
          updateCounter();
        })
        .on("error", (error, receipt) => {
          console.log("CounterChanged error: ", error);
          updateCounter();
        });
    }
  }, [counterContract, updateCounter]);

  const isCounterContractLoading = !!contractAddress && !counterContract;
  const contractDetailsUrl = `${process.env.REACT_APP_ETHERSCAN_URL}/address/${contractAddress}`;

  return {
    counter,
    pastEvents,
    newEvents,

    updateCounter,

    incrementCounter,
    decrementCounter,
    resetCounter,

    isCounterContractLoading,
    contractDetailsUrl,
  };
}

export default useCounterContract;
