import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import DataChart from "./components/DataChart";
import DataTabs from "./components/DataTabs";
import { useGetTransaction } from "./hooks/useGetTransaction";
import { useTransactionContext } from "./hooks/useTransactionContext";

export default function App() {
  const [tab, setTab] = useState(0);
  const { isLoading, getTransaction } = useGetTransaction();
  const { transaction } = useTransactionContext();

  useEffect(() => {
    getTransaction();
  }, [getTransaction]);

  const handleTabChange = (e, tab) => {
    setTab(tab);
  };

  return isLoading || !transaction ? (
    <LinearProgress />
  ) : (
    <Box m={1} sx={{ maxWidth: "800px" }}>
      {/* {error && <Alert severity="error">{error}</Alert>} */}
      <DataChart />
      <DataTabs
        handleTabChange={handleTabChange}
        tab={tab}
      />
    </Box>
  );
}
