import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";

function Loader({ height, children }) {
  return (
    <LoaderContainer height={height}>
      <CircularProgress />
      {children ? <LabelContainer>{children}</LabelContainer> : null}
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

const LabelContainer = styled("div")({
  marginTop: "16px",
});
