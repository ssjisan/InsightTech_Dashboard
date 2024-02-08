import { Box, Table, TableContainer, Typography } from "@mui/material";
import { useState } from "react";
import productData from "../../Assets/data.json";
import Body from "./Table/Body";
import Header from "./Table/Header";
import Pagination from "./Table/Pagination";

export default function BookListTabel() {
    // eslint-disable-next-line
    const [product, setProduct] = useState(productData);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

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
                    <Typography>All Books</Typography>
                </Box>
                <Table>
                    <Header />
                    <Body product={product} page={page} rowsPerPage={rowsPerPage}/>
                </Table>
                <Pagination productLength={product.length} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} page={page} rowsPerPage={rowsPerPage}/>
            </TableContainer>
        </Box>
    );
}