import { Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material";
import { Close } from "../../Assets/Icons";
import { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import axios from "axios";

export default function AddCategory() {
    const { openCategoryModal,handleCloseCategoryModal,handleCategoryChange,categoryList } = useContext(DataContext);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "882px",
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid trasnparent"
    };

    // const categoryListTest= [categoryList]
const handleSave=()=>{
    axios.post('http://localhost:5500/add-category',categoryList)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })

}
    
    return (
        <Modal
            open={openCategoryModal}
            onClose={handleCloseCategoryModal}
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
                    <Typography variant="body2">Add a New Category</Typography>
                    <IconButton onClick={handleCloseCategoryModal}>
                        <Close />
                    </IconButton>
                </Box>
                <Box sx={{ p: "24px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "center", mb: "24px" }}>
                        <Typography sx={{ width: "372px" }} variant="subtitle2" color="text.primary">Category Id</Typography>
                        <TextField
                            sx={{ width: "372px" }}
                            variant="outlined"
                            name="categoryId"
                            type="number"
                            placeholder="Category Id"
                            value={categoryList.categoryId}
                            hiddenlabel="true"  
                            onChange={handleCategoryChange}
                            size="small"
                        />
                    </Box>
                    <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "center", mb: "24px" }}>
                        <Typography sx={{ width: "372px" }} variant="subtitle2" color="text.primary">Category Name</Typography>
                        <TextField
                            sx={{ width: "372px" }}
                            variant="outlined"
                            name="categoryName"
                            hiddenlabel="true"  
                            size="small"
                            placeholder="Category Name"
                            value={categoryList.categoryName}
                            onChange={handleCategoryChange}
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
                        <Button variant="outlined" sx={{ width: "120px" }} onClick={handleCloseCategoryModal}>Back</Button>
                        <Button variant="contained" sx={{ width: "120px" }} onClick={handleSave}>Save</Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}
