import {
    Typography,
    Avatar,
    Menu,
    MenuItem,
    Box,
    Divider,
} from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function AccountPopOver() {
    const {setIsUserLoggedIn} = useContext(DataContext)
    const [accountPopOver, setAccountPopOver] = useState(false);
    const handleOpenPopOver = (event) => {
        setAccountPopOver(event.currentTarget);
    };
    const handleClosePopOver = () => {
        setAccountPopOver(null);
    };
    const handleLogOut=()=>{
        setIsUserLoggedIn(false)
    }
    return (
        <Box>
            <Avatar variant="rounded" sx={{ width: "40px", height: "40px", cursor: "pointer", backgroundColor: "#F0F0F0", color: "#060415" }} onClick={handleOpenPopOver} />
            <Menu
                sx={{
                    mt: "32px",
                    "& .MuiPaper-root": {
                        overflow: "visible",
                        borderRadius: "12px",
                        filter: "drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.24))",
                        mt: 1.5,
                        boxShadow: "-20px 20px 40px -4px rgba(145, 158, 171, 0.24)",
                        padding: "8px 16px",
                    },
                    "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                    },
                }}
                id="menu-appbar"
                anchorEl={accountPopOver}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={accountPopOver}
                onClose={handleClosePopOver}
            >
                <Box
                    sx={{
                        width: "220px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        mb: "16px"
                    }}
                >
                    <Typography variant="body2" color="text.primary">
                        bookerzo@info.com
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        Admin
                    </Typography>
                </Box>
                <Divider variant="middle" sx={{ borderStyle: 'dashed', }} />
                <MenuItem onClick={handleLogOut} sx={{
                    mt: "8px",
                }}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#FF4842",
                        }}
                    >
                        Log Out
                    </Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
}