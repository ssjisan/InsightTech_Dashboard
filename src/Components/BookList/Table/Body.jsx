import { IconButton, TableBody, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { More } from "../../../Assets/Icons";

//eslint-disable-next-line
export default function Body({ product,page,rowsPerPage }) {
    //eslint-disable-next-line
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.body}`]: {
            color: "#212121",
            fontWeight: "500",
            border: "none",
            padding:"8px"
        },
    }));
    return (
        <TableBody>
            {/* eslint-disable-next-line */}
            {product.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (
                <TableRow key={data.book_id}>
                    <StyledTableCell align="center">{data.book_id}</StyledTableCell>
                    <StyledTableCell align="left">{data.book_name}</StyledTableCell>
                    <StyledTableCell align="center">{data.book_category}</StyledTableCell>
                    <StyledTableCell align="center">{data.book_writer}</StyledTableCell>
                    <StyledTableCell align="center">{data.book_publisher}</StyledTableCell>
                    <StyledTableCell align="center">{data.book_stock}</StyledTableCell>
                    <StyledTableCell align="center">{data.purchase_price}</StyledTableCell>
                    <StyledTableCell align="center">{data.sell_price}</StyledTableCell>
                    <StyledTableCell align="center">
                        <IconButton sx={{width:"40px", height:"40px"}}>
                            <More />
                        </IconButton>
                    </StyledTableCell>
                </TableRow>
            ))}
        </TableBody>
    );
}

