import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

import { DEPLOY_CONTRACT_PATH } from "./routes";
import useCounterContract from "../hooks/useCounterContract";
import CounterDisplay from "../components/CounterDisplay";
import AddressLabel from "../components/AddressLabel";
import ContractEvents from "../components/ContractEvents";

function ContractPage({ metamaskInstance, isMetamaskDefined, userAddress }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [contractAddressInput, setContractAddressInput] = useState(
    () =>
      searchParams.get("contractAddress") ||
      process.env.REACT_APP_CONTRACT_ADDRESS ||
      ""
  );

  const [contractAddress, setContractAddress] = useState("");

  const {
    counter,
    pastEvents,
    newEvents,
    incrementCounter,
    decrementCounter,
    resetCounter,
    isCounterContractLoading,
    contractDetailsUrl,
  } = useCounterContract(
    metamaskInstance,
    isMetamaskDefined,
    userAddress,
    contractAddress
  );

  // if an address is present in the query we update the input
  useEffect(() => {
    const contractAddress = searchParams.get("contractAddress");

    if (contractAddress) {
      setContractAddressInput(contractAddress);
    }
  }, [searchParams]);

  useEffect(() => {
    const isValidAddress =
      !!contractAddressInput &&
      metamaskInstance?.utils.isAddress(contractAddressInput);

    if (isValidAddress) {
      setSearchParams({ contractAddress: contractAddressInput });
      setContractAddress(contractAddressInput);
    }
  }, [contractAddressInput, metamaskInstance, setSearchParams]);

  // TODO: ADD LOADING CONTRACT DATA

  // TODO: ADD ERROR IN THE TEXT FIELD
  // TODO: ADD ERROR IN THE SMART CONTRACT LOAD
  return (
    <div>
      <StyledContainer>
        <TextField
          value={contractAddressInput}
          onChange={(e) => {
            const value = e.target.value;
            setContractAddressInput(value);
          }}
          id="contract-address-field"
          label="Contract Address"
          variant="standard"
          fullWidth
        />

        <StyledText>
          Or you can Deploy your own Counter Smart Contract in the{" "}
          <StyledInternalLink to={DEPLOY_CONTRACT_PATH}>
            Deployment Page.
          </StyledInternalLink>
        </StyledText>
      </StyledContainer>

      <main>
        {isCounterContractLoading ? (
          <div>Loading contract...</div>
        ) : (
          contractAddress && (
            <>
              <StyledCounterContainer elevation={4}>
                <Typography component={"h2"} variant={"h4"} gutterBottom>
                  Counter Contract
                </Typography>

                {/* Contract Address */}
                <Typography component={"h3"} variant={"h6"} gutterBottom>
                  <AddressLabel
                    address={contractAddress}
                    ariaLabel="contract address"
                    etherscanLink={contractDetailsUrl}
                    showCopyIntoClipboardButton
                    iconSize="small"
                  />
                </Typography>

                {/* Current Counter State */}
                <CounterDisplay>{counter}</CounterDisplay>

                {/* Contract Methods */}
                <div>
                  <Button onClick={decrementCounter}>Decrement</Button>
                  <Button onClick={resetCounter}>Reset</Button>
                  <Button onClick={incrementCounter}>Increment</Button>
                </div>
              </StyledCounterContainer>

              <ContractEvents pastEvents={pastEvents} newEvents={newEvents} />
            </>
          )
        )}
      </main>
    </div>
  );
}

export default ContractPage;

const StyledContainer = styled(Paper)({
  margin: "24px auto",
  padding: 24,
});

const StyledText = styled(Typography)({
  marginTop: "16px",
  textAlign: "left",
});

const StyledCounterContainer = styled(Paper)({
  textAlign: "center",
  margin: "24px auto",
  padding: 16,
});

const StyledInternalLink = styled(Link)({
  color: "rgb(102, 178, 255);",
});
