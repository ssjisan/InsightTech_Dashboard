import { TablePagination } from "@mui/material";
//eslint-disable-next-line
export default function Pagination({ productLength, handleChangeRowsPerPage, handleChangePage, page,rowsPerPage }) {


    return (
        <TablePagination
            rowsPerPageOptions={[5]}
            component="div"
            count={productLength}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{ borderBottom: "none", borderTop: "1px solid rgba(145, 158, 171, 0.24)" }}

        />

    );
}
