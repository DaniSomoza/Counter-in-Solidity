import { useMemo } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import IosShareIcon from "@mui/icons-material/IosShare";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const ADDRESS_LENGTH = 42;

// TODO: Support chain short name

function AddressLabel({
  address,
  ariaLabel,
  etherscanLink,
  showCopyIntoClipboardButton,
  iconSize,
}) {
  const addressLabel = useMemo(() => {
    if (address) {
      const firstPart = address.slice(0, 6);
      const lastPart = address.slice(ADDRESS_LENGTH - 6);

      return `${firstPart}...${lastPart}`;
    }

    return address;
  }, [address]);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      component="span"
    >
      <Tooltip title={address}>
        <span>{addressLabel}</span>
      </Tooltip>

      {/* Button to etherscan */}
      {etherscanLink && (
        <Tooltip title={`Show ${ariaLabel} details on Etherscan`}>
          <IconButton
            color="primary"
            aria-label={`Show ${ariaLabel} details on Etherscan`}
            component="a"
            href={etherscanLink}
            target="_blank"
            rel="noopener"
            style={{ marginLeft: 0 }}
          >
            <IosShareIcon fontSize={iconSize || "small"} />
          </IconButton>
        </Tooltip>
      )}

      {/* Button to Copy into clipboard */}
      {showCopyIntoClipboardButton && (
        <Tooltip title={`Copy ${ariaLabel} to clipboard`}>
          <IconButton
            color="primary"
            aria-label={`Copy ${ariaLabel} to clipboard`}
            style={{ marginLeft: 0 }}
            onClick={() => navigator?.clipboard?.writeText?.(address)}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}
    </Stack>
  );
}

export default AddressLabel;
