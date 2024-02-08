import { Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material";
import { Close } from "../../Assets/Icons";
//eslint-disable-next-line
export default function AddCategory({ handleClosePublisher, openPublisher }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "882px",
    height: "348px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid trasnparent"
  };
  return (
    <Modal
      open={openPublisher}
      onClose={handleClosePublisher}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box sx={{
          display: "flex",
          height: "64px",
          padding: "8px 24px",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "40px",
          alignSelf: "stretch",
          background: "#FAF8FF"
        }}>
          <Typography variant="body2">Add a New Publisher</Typography>
          <IconButton onClick={handleClosePublisher}>
            <Close />
          </IconButton>
        </Box>
        <Box sx={{ p: "24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "center", mb: "24px" }}>
            <Typography sx={{ width: "372px" }} variant="subtitle2" color="text.primary">Publisher Id</Typography>
            <TextField
              sx={{ width: "372px" }}
              variant="outlined"
              name="Publisher ID"
              disabled
              value={"PBC0001"}
              hiddenlabel="true"  
              size="small"
            />
          </Box>
          <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "center", mb: "24px" }}>
            <Typography sx={{ width: "372px" }} variant="subtitle2" color="text.primary">Publisher Name</Typography>
            <TextField
              sx={{ width: "372px" }}
              variant="outlined"
              name="Publisher Name"
              hiddenlabel="true"  
              size="small"
              placeholder="Publisher Name"
            />
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "stretch",
            gap: "24px",
            mt: "16px"
          }}>
            <Button variant="outlined" sx={{ width: "120px" }}>Back</Button>
            <Button variant="contained" sx={{ width: "120px" }}>Save</Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
