import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";
import IosShareIcon from "@mui/icons-material/IosShare";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import AddressLabel from "./AddressLabel";
import Button from "./Button";

function Header({
  userAddress,
  userAddressDetailsUrl,
  isMetamaskDefined,
  connectToMetamask,
}) {
  return (
    <HeaderContainer>
      <StyledToolbar>
        {isMetamaskDefined ? (
          <Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              component="span"
            >
              <AddressLabel address={userAddress} />{" "}
              <Tooltip title="Show your address details on Etherscan">
                <IconButton
                  color="primary"
                  aria-label="Show your address details on Etherscan"
                  component="a"
                  href={userAddressDetailsUrl}
                  target="_blank"
                  rel="noopener"
                  style={{ marginLeft: 0 }}
                >
                  <IosShareIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Copy your address to clipboard">
                <IconButton
                  color="primary"
                  aria-label="Copy your address to clipboard"
                  style={{ marginLeft: 0 }}
                  onClick={() => navigator.clipboard.writeText(userAddress)}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Typography>
        ) : (
          <Button onClick={connectToMetamask}>Connect To Metamask</Button>
        )}
      </StyledToolbar>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled(AppBar)({
  height: "64px",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "flex-end",
  maxWidth: "1200px",
  width: "100%",
  margin: "0 auto",
});
