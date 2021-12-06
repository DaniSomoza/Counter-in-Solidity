import Typography from "@mui/material/Typography";

function CounterDisplay({ children }) {
  return (
    <div>
      <Typography variant="h2" component="span">
        {children}
      </Typography>
    </div>
  );
}

export default CounterDisplay;
