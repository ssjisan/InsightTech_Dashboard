import { IconButton, TableBody, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Remove } from "../../../Assets/Icons";
import { useContext } from "react";
import { DataContext } from "../../../DataProcessing/DataProcessing";

export default function Body() {
  const {
    allScheduleMeeting,
    schedulePage,
    scheduleRowsPerPage,
    handleScheduleRemoveRequest,
  } = useContext(DataContext);
  //eslint-disable-next-line
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      color: "#212121",
      fontWeight: "500",
      border: "none",
      padding: "8px",
    },
  }));
  return (
    <TableBody>
      {/* eslint-disable-next-line */}
      {allScheduleMeeting
        ?.slice(
          schedulePage * scheduleRowsPerPage,
          schedulePage * scheduleRowsPerPage + scheduleRowsPerPage
        )
        .map((data) => (
          <TableRow key={data.id}>
            <StyledTableCell align="left">{data.name}</StyledTableCell>
            <StyledTableCell align="left">{data.email}</StyledTableCell>
            <StyledTableCell align="center">{data.phone}</StyledTableCell>
            <StyledTableCell align="center">{data.date}</StyledTableCell>
            <StyledTableCell align="center">{data.timeSlot}</StyledTableCell>
            <StyledTableCell align="center">
              {data.brief === "" ? "--" : data.brief}
            </StyledTableCell>
            <StyledTableCell align="center">
              <IconButton
                sx={{ width: "40px", height: "40px" }}
                onClick={() => handleScheduleRemoveRequest(data.id)}
              >
                <Remove />
              </IconButton>
            </StyledTableCell>
          </TableRow>
        ))}
    </TableBody>
  );
}
