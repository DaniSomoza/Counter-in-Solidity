import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

import contractFile from "../contracts/Counter.sol";
import useContractDeployment from "../hooks/useContractDeployment";
import Loader from "../components/Loader";
import Button from "../components/Button";

function DeployContractPage({
  metamaskInstance,
  isMetamaskDefined,
  userAddress,
}) {
  const [contractCode, setContractCode] = useState();

  useEffect(() => {
    fetch(contractFile)
      .then((r) => r.text())
      .then((contractCode) => {
        setContractCode(contractCode);
      });
  }, []);

  const {
    deployContract,
    // transactionDeploymentHash,
    isDeploymentLoading,
    // contractAddress,
    // transactionDeploymentUrl,
  } = useContractDeployment(metamaskInstance, isMetamaskDefined, userAddress);

  return (
    <main>
      <StyledPaper>
        <Typography component={"h2"} variant={"h5"}>
          Deploy your Counter Contract
        </Typography>

        {isDeploymentLoading ? (
          <Loader height="300px">{"Deploying your contract..."}</Loader>
        ) : (
          <div>
            <CodeContainer>
              <code lang={"solidity"}>
                {contractCode || <Loader height="300px" />}
              </code>
            </CodeContainer>
            <Button onClick={deployContract}>Deploy Counter</Button>
          </div>
        )}
      </StyledPaper>
    </main>
  );
}

export default DeployContractPage;

const StyledPaper = styled(Paper)({
  padding: "16px",
});

const CodeContainer = styled("pre")({
  margin: "16px auto;",
  textAlign: "left",
  backgroundColor: "#001e3c",
  padding: "16px",
  borderRadius: "4px",
  border: "1px solid #132f4c",
});
