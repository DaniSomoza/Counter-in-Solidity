import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

function CounterDisplay({ children }) {
  return (
    <div>
      <CounterLabel variant="h2" component="span">
        {children}
      </CounterLabel>
    </div>
  );
}

export default CounterDisplay;

const CounterLabel = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  padding: "4px 8px",
  margin: "16px",
  backgroundColor: theme.palette.grey[800],
  borderRadius: "4px",
  border: "1px solid",
  borderColor: theme.palette.divider,
}));
