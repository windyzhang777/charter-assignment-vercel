import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  TABLE1_COLUMNS,
  TABLE2_COLUMNS,
} from "../constants";
import { sortUsers } from "../helpers/commonHelpers";
import { useTransactionContext } from "../hooks/useTransactionContext";

export function DataTable({ isTx, getDataByPoints }) {
  const [data, setData] = useState([]);
  const { transaction } = useTransactionContext();
  const handleDataTransform = useCallback(
    (data) => {
      const allUserIds = sortUsers(data);
      const res = [];
      for (const id of allUserIds) {
        res.push(getDataByPoints(id));
      }
      return res;
    },
    [getDataByPoints]
  );

  const tableHeading = useMemo(
    () => (isTx ? TABLE1_COLUMNS : TABLE2_COLUMNS),
    [isTx]
  );

  useEffect(() => {
    if (isTx) {
      setData(transaction);
    } else {
      setData(handleDataTransform(transaction));
    }
  }, [transaction, handleDataTransform, isTx]);

  return (
    <Box mb={2}>
      <DataGrid
        rows={data}
        columns={tableHeading}
        slots={{ toolbar: GridToolbar }}
        initialState={{
          ...data.initialState,
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        pageSizeOptions={[10, 25, 50, 100]}
      />
    </Box>
  );
}
