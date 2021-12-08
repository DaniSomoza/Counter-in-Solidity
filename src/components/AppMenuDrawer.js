import { Link } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import AddressLabel from "./AddressLabel";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { HOME_PATH } from "../routes/routes";

const drawerWidth = "290px";

function AppMenuDrawer({ isOpen, contracts, setIsMenuOpen }) {
  return (
    <StyledSwipeableDrawer
      open={isOpen}
      onOpen={() => setIsMenuOpen(true)}
      onClose={() => setIsMenuOpen(false)}
    >
      <DrawerContainer>
        <Typography component="p" variant="h5" gutterBottom>
          User Contracts
        </Typography>
        {contracts.map((contractAddress) => {
          return (
            <AddressContainer key={contractAddress}>
              <AddressLabel
                ariaLabel={"contract user address"}
                address={contractAddress}
                etherscanLink={`${process.env.REACT_APP_ETHERSCAN_URL}/address/${contractAddress}`}
                iconSize="small"
              />
              <StyledInternalLink
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                to={`${HOME_PATH}?contractAddress=${contractAddress}`}
              >
                Load Contract
              </StyledInternalLink>
            </AddressContainer>
          );
        })}
      </DrawerContainer>
    </StyledSwipeableDrawer>
  );
}

export default AppMenuDrawer;

const StyledSwipeableDrawer = styled(SwipeableDrawer)({
  textAlign: "center",
});

const DrawerContainer = styled("div")({
  width: drawerWidth,
  padding: "24px 0",
});

const AddressContainer = styled("div")({
  display: "flex",
  justifyContent: "space-evenly",
  padding: "8px 12px",
  alignItems: "center",
});

const StyledInternalLink = styled(Link)({
  fontSize: "12px",
  color: "rgb(102, 178, 255);",
});
