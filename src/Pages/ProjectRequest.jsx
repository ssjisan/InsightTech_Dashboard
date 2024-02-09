import { Box, Toolbar, Typography } from "@mui/material";
import Sidebar from "../Layout/Sidebar/Sidebar";
import ProjectRequestTable from "../Components/ProjectRequest.jsx/ProjectRequestTable";

export default function ProjectRequest() {
    const drawerWidth = 280;

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
                <Box sx={{ paddingBottom: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <Typography variant="h2" color="text.priamry">Project Requests</Typography>
                    </Box>
                </Box>
                <ProjectRequestTable/>
            </Box>
        </Box>
    )
}
