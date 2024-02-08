import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import { Close } from "../../Assets/Icons";
import InvoiceForm from "./Component/InvoiceForm";
//eslint-disable-next-line
export default function SellBooks({ open, handleClose }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "calc(100% - 128px)",
        height: "calc(100% - 40px)",
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: "10px",
        overflow: "hidden"
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{
                    display: "flex",
                    height: "56px",
                    padding: "8px 24px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "40px",
                    alignSelf: "stretch",
                    background: "#FAF8FF"
                }}>
                    <Typography variant="body2">Sell Book</Typography>
                    <IconButton onClick={handleClose}>
                        <Close />
                    </IconButton>
                </Box>
                <Box>
                    <Grid container>
                        <Grid item lg={3}>
                            <InvoiceForm/>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Modal>
    )
}
