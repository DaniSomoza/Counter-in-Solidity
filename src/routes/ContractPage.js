import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import IosShareIcon from "@mui/icons-material/IosShare";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

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
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={2}
                    component="span"
                  >
                    <AddressLabel address={contractAddress} />{" "}
                    <Tooltip title="Show contract details on Etherscan">
                      <IconButton
                        color="primary"
                        component="a"
                        href={contractDetailsUrl}
                        aria-label="Show contract details on Etherscan"
                        target="_blank"
                        rel="noopener"
                        style={{ marginLeft: 0 }}
                      >
                        <IosShareIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Copy contract address to clipboard">
                      <IconButton
                        color="primary"
                        aria-label="Copy contract address to clipboard"
                        style={{ marginLeft: 0 }}
                        onClick={() =>
                          navigator.clipboard.writeText(contractAddress)
                        }
                      >
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Typography>

                {/* Current Counter State */}
                <CounterDisplay>{counter}</CounterDisplay>

                {/* Contract Functions */}
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
  margin: "24px auto",
  padding: 16,
});

const StyledInternalLink = styled(Link)({
  color: "rgb(102, 178, 255);",
});
