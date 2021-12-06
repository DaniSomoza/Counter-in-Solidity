import ButtonMui from "@mui/material/Button";
import { styled } from "@mui/system";

const StyledButton = styled(ButtonMui)({
  margin: 8,
});

function Button({ onClick, children }) {
  return (
    <StyledButton onClick={onClick} variant="contained">
      {children}
    </StyledButton>
  );
}

export default Button;
