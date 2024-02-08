import { Box, Toolbar, Typography } from "@mui/material";
import Sidebar from "../Layout/Sidebar/Sidebar";
import BookListTable from "../Components/BookList/BookListTabel"
import { Link } from "react-router-dom";
export default function Invoice() {

    const drawerWidth = 280;
    const linkStyle = {
        textDecoration: "none",
    };
    return (
        <Box>
            <Sidebar />
            <Box
                component="main"
                sx={{
                    p: 3,
                    width: { lg: `calc(100% - ${drawerWidth}px)` },
                    ml: { lg: `${drawerWidth}px` },
                }}
            >
                <Toolbar />
                <Box sx={{
                    paddingBottom: "20px", display: "flex", justifyContent: "flex-start",
                    alignItems: "center"
                }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <Typography variant="h2">Invoice</Typography>
                        <Box sx={{ display: "flex", gap: "8px" }}>
                            <Link to="/dashboard" style={linkStyle}>
                                <Typography variant="subtitle2" color="text.secondary">Home</Typography>
                            </Link>
                            <Typography variant="subtitle2" color="text.primary">/</Typography>
                            <Typography variant="body3" color="text.primary">Invoice</Typography>
                        </Box>
                    </Box>
                </Box>
                <BookListTable />
            </Box>
        </Box>
    )
}
