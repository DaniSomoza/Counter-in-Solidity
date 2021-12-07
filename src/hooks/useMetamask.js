import { useState, useEffect } from "react";
import Web3 from "web3";

function useMetamask() {
  const [metamaskInstance, setMetamaskInstance] = useState();
  const [userAddress, setUserAddress] = useState();

  // Initialize Metamask instance if its present in the browser
  useEffect(() => {
    if (!window.ethereum) {
      return;
    }

    const metamaskInstance = new Web3(window.ethereum);

    setMetamaskInstance(metamaskInstance);
  }, []);

  // Load current user address and subscribe to accountsChanged event
  useEffect(() => {
    async function loadUserAccount() {
      metamaskInstance.eth.getAccounts().then((userAddress) => {
        setUserAddress(userAddress[0]);
      });
    }

    if (metamaskInstance) {
      loadUserAccount();

      // subscribe to accountsChanged event to update the current user address
      metamaskInstance.currentProvider.on("accountsChanged", () => {
        loadUserAccount();
      });
    }
  }, [metamaskInstance]);

  const isMetamaskDefined =
    metamaskInstance?.currentProvider.isMetaMask && !!userAddress;

  const userAddressDetailsUrl = `${process.env.REACT_APP_ETHERSCAN_URL}/address/${userAddress}`;

  return {
    metamaskInstance,
    userAddress,
    isMetamaskDefined,
    userAddressDetailsUrl,
  };
}

export default useMetamask;
