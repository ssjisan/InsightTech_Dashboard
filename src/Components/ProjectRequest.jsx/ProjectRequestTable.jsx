import { Box, Table, TableContainer, Typography } from "@mui/material";
import Header from "./Table/Header";
import Body from "./Table/Body";
import Pagination from "./Table/Pagination";
export default function ProjectRequestTable() {
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
                <Box sx={{ padding: "8px 24px", height: "64px" }}>
                    <Typography variant="h5">Project Requests</Typography>
                </Box>
                <Table>
                    <Header />
                    <Body />
                </Table>
                <Pagination  />
            </TableContainer>
        </Box>
    )
}
