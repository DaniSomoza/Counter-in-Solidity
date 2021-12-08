import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import AddressLabel from "./AddressLabel";

function ContractEvents({ pastEvents, newEvents }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="contract event table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Method</TableCell>
            <TableCell align="center">User</TableCell>
            <TableCell align="center">Value</TableCell>
            <TableCell align="center">Transaction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...newEvents, ...pastEvents].map((event) => (
            <TableRow key={event.transactionHash}>
              <TableCell align="center">
                {event.isPending ? (
                  <CircularProgress size={24} />
                ) : (
                  <CheckCircleRoundedIcon color="success" />
                )}
              </TableCell>
              <TableCell align="center">
                {LabelByMethod[event.returnValues.eventType]}
              </TableCell>
              <TableCell align="center">
                <AddressLabel address={event.returnValues.userAddress} />
              </TableCell>
              <TableCell align="center">
                {event.returnValues.counter || <UnknownValue />}
              </TableCell>
              <TableCell align="center">
                <AddressLabel address={event.transactionHash} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ContractEvents;

const IncrementLabel = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.success.dark,
  color: theme.palette.success.contrastText,
  padding: "4px 8px",
  borderRadius: "4px",
}));

const DecrementLabel = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  color: theme.palette.warning.contrastText,
  padding: "4px 8px",
  borderRadius: "4px",
}));

const ResetLabel = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.error.contrastText,
  padding: "4px 8px",
  borderRadius: "4px",
}));

function UnknownValue() {
  return <UnknownValueLabel>Unknown</UnknownValueLabel>;
}

const UnknownValueLabel = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  color: theme.palette.warning.contrastText,
  padding: "4px  8px",
  borderRadius: "4px",
}));

const LabelByMethod = {
  increment: <IncrementLabel>Increment</IncrementLabel>,
  decrement: <DecrementLabel>Decrement</DecrementLabel>,
  reset: <ResetLabel>Reset</ResetLabel>,
};
