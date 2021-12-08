import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/system";

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
            <AddressLabel
              address={userAddress}
              ariaLabel={"your address"}
              etherscanLink={userAddressDetailsUrl}
              showCopyIntoClipboardButton
              iconSize="small"
            />
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
