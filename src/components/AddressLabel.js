import { useMemo } from "react";
import Tooltip from "@mui/material/Tooltip";

function AddressLabel({ address }) {
  const addressLabel = useMemo(() => {
    if (address) {
      const firstPart = address.slice(0, 6);
      const lastPart = address.slice(42 - 6);

      return `${firstPart}...${lastPart}`;
    }

    return address;
  }, [address]);

  return (
    <Tooltip title={address}>
      <span>{addressLabel}</span>
    </Tooltip>
  );
}

export default AddressLabel;
