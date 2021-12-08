import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";

import AddressLabel from "./AddressLabel";
import Button from "./Button";

function Header({
  userAddress,
  userAddressDetailsUrl,
  isMetamaskDefined,
  connectToMetamask,
  setIsMenuOpen,
}) {
  return (
    <HeaderContainer>
      <StyledToolbar>
        <IconButton
          aria-label="open menu drawer"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <MenuIcon />
        </IconButton>

        <MetamaskContainer>
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
        </MetamaskContainer>
      </StyledToolbar>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled(AppBar)({
  height: "64px",
  display: "flex",
  flexDirection: "row",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  flexGrow: 1,
});

const MetamaskContainer = styled("div")({
  flexGrow: 1,
  display: "flex",
  justifyContent: "flex-end",
});
