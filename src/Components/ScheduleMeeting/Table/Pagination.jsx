import { TablePagination } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../../DataProcessing/DataProcessing";
//eslint-disable-next-line
export default function Pagination() {
  const {
    allScheduleMeeting,
    handleSchedulePageChange,
    handleScheduleRowsPerPage,
    schedulePage,
    scheduleRowsPerPage,
  } = useContext(DataContext);
  return (
    <TablePagination
      rowsPerPageOptions={[10]}
      component="div"
      count={allScheduleMeeting.length}
      rowsPerPage={scheduleRowsPerPage}
      page={schedulePage}
      onPageChange={handleSchedulePageChange}
      onRowsPerPageChange={handleScheduleRowsPerPage}
      sx={{
        borderBottom: "none",
        borderTop: "1px solid rgba(145, 158, 171, 0.24)",
      }}
    />
  );
}
