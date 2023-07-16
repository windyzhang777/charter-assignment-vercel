import InfoIcon from "@mui/icons-material/Info";
import { Box, Tooltip } from "@mui/material";

export const REWARD_DISCLAIMER = `
A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
`;

export const TABLE1_COLUMNS = [
  {
    field: "id",
    headerName: "Tx Id",
    align: "left",
  },
  {
    field: "userId",
    headerName: "User Id",
  },
  {
    field: "amount",
    headerName: "Transaction Amount($)",
    type: "number",
    flex: 1,
    align: "right",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1,
    headerAlign: "right",
    align: "right",
    renderCell: ({ row: { createdAt } }) => (
      <Box>{createdAt.replace(/T/g, " ").slice(0, -1)}</Box>
    ),
  },
  {
    field: "points",
    headerName: "Reward Points",
    type: "number",
    flex: 1,
    align: "right",
    renderHeader: () => (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {"Reward Points"}
        <Tooltip
          sx={{
            height: "18px",
            width: "18px",
            marginLeft: "2px",
          }}
          title={REWARD_DISCLAIMER}
          placement="top"
        >
          <InfoIcon />
        </Tooltip>
      </Box>
    ),
  },
];

export const TABLE2_COLUMNS = [
  {
    field: "id",
    headerName: "User Id",
    align: "left",
  },
  {
    field: "total",
    headerName: "Total Points",
    type: "number",
    flex: 1,
    align: "right",
  },
  {
    field: "march",
    headerName: "March(Points)",
    type: "number",
    flex: 1,
    align: "right",
  },
  {
    field: "april",
    headerName: "April(Points)",
    type: "number",
    flex: 1,
    align: "right",
  },
  {
    field: "may",
    headerName: "May(Points)",
    type: "number",
    flex: 1,
    align: "right",
  },
];
