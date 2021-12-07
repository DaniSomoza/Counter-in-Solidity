import { useState, useEffect, useCallback } from "react";
import Web3 from "web3";

function useMetamask() {
  const [metamaskInstance, setMetamaskInstance] = useState();
  const [userAddress, setUserAddress] = useState();

  const connectToMetamask = useCallback(async () => {
    if (!window.ethereum) {
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const userAddress = accounts[0];

    const metamaskInstance = new Web3(window.ethereum);

    setMetamaskInstance(metamaskInstance);
    setUserAddress(userAddress);

    // subscribe to accountsChanged event to update the current user address
    metamaskInstance.currentProvider.on("accountsChanged", () => {
      metamaskInstance.eth.getAccounts().then((userAddress) => {
        setUserAddress(userAddress[0]);
      });
    });
  }, []);

  // Initialize Metamask instance if its present in the browser
  useEffect(() => {
    connectToMetamask();
  }, [connectToMetamask]);

  const isMetamaskDefined =
    metamaskInstance?.currentProvider.isMetaMask && !!userAddress;

  const userAddressDetailsUrl = `${process.env.REACT_APP_ETHERSCAN_URL}/address/${userAddress}`;

  return {
    metamaskInstance,
    userAddress,
    isMetamaskDefined,
    userAddressDetailsUrl,
    connectToMetamask,
  };
}

export default useMetamask;
