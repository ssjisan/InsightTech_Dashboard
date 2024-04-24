import { Box, Table, TableContainer } from "@mui/material";
import Header from "./Table/Header";
import Body from "./Table/Body";
import Pagination from "./Table/Pagination";
export default function ScheduleMeetingTable() {
    return (
        <Box
            sx={{
                boxShadow:
                    "0px 0px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
                borderRadius: "16px",
                p: 2,
                mt: 3,
            }}
        >
            <TableContainer>
                <Table>
                    <Header />
                    <Body />
                </Table>
                <Pagination  />
            </TableContainer>
        </Box>
    )
}
