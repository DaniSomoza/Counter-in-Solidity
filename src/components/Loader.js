import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";

function Loader({ height, children }) {
  return (
    <LoaderContainer height={height}>
      <CircularProgress />
      {children}
    </LoaderContainer>
  );
}

export default Loader;

const LoaderContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "height",
})((props) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: props.height,
  flexDirection: "column",
}));
