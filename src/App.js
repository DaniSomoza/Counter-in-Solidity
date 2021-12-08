import { Routes, Route, Navigate } from "react-router-dom";
import { styled } from "@mui/system";

import useMetamask from "./hooks/useMetamask";
import Header from "./components/Header";
import DeployContractPage from "./routes/DeployContractPage";
import { DEPLOY_CONTRACT_PATH, HOME_PATH } from "./routes/routes";
import { Typography } from "@mui/material";
import ContractPage from "./routes/ContractPage";
import useUserContractList from "./hooks/useUserContractList";
import { useState } from "react";
import AppMenuDrawer from "./components/AppMenuDrawer";

function App() {
  const {
    metamaskInstance,
    isMetamaskDefined,
    userAddress,
    userAddressDetailsUrl,
    connectToMetamask,
  } = useMetamask();

  const { contracts, getUserContractList } = useUserContractList({
    isMetamaskDefined,
    metamaskInstance,
    userAddress,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppContainer>
      <Header
        userAddressDetailsUrl={userAddressDetailsUrl}
        userAddress={userAddress}
        isMetamaskDefined={isMetamaskDefined}
        connectToMetamask={connectToMetamask}
        setIsMenuOpen={setIsMenuOpen}
      />

      <AppMenuDrawer
        isOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        contracts={contracts}
      />

      <Typography component="h1" variant="h2" gutterBottom>
        Counter in Solidity
      </Typography>

      <Routes>
        <Route
          path={HOME_PATH}
          element={
            <ContractPage
              metamaskInstance={metamaskInstance}
              isMetamaskDefined={isMetamaskDefined}
              userAddress={userAddress}
            />
          }
        />

        <Route
          path={DEPLOY_CONTRACT_PATH}
          element={
            <DeployContractPage
              metamaskInstance={metamaskInstance}
              isMetamaskDefined={isMetamaskDefined}
              userAddress={userAddress}
              getUserContractList={getUserContractList}
            />
          }
        />

        {/* Unknown routes redirects to the home page */}
        <Route path="*" element={<Navigate to={HOME_PATH} replace={true} />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled("div")({
  margin: "82px auto 0 auto",
  maxWidth: "900px",
  textAlign: "center",
});
