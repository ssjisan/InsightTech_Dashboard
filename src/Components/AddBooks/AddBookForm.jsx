import { Autocomplete, Box, Button, TextField, Typography } from "@mui/material";
import { AddIcon, DownArrow } from "../../Assets/Icons";
import { useContext, useState } from "react";
import AddCategory from "./AddCategory";
import AddPublisher from "./AddPublisher";
import category from "../../Assets/category.json"
import publisher from "../../Assets/publisher.json"
import { DataContext } from "../../DataProcessing/DataProcessing";
export default function AddBookForm() {
    const {
        handleOpenCategoryModal
    } = useContext(DataContext);
    //eslint-disable-next-line
    const [publisherName, setPublisherName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [openPublisher, setOpenPublisher] = useState(false);
    //eslint-disable-next-line
    const handlePublisher = (event) => {
        setPublisherName(event.target.value);
    };
    //eslint-disable-next-line
    const handleCategory = (event) => {
        setCategoryName(event.target.value);
    };

    const handleOpenPublisher = () => {
        setOpenPublisher(true)
    }
    const handleClosePublisher = () => {
        setOpenPublisher(false)
    }
    console.log(categoryName);
    return (
        <Box sx={{ mt: "40px" }}>
            <Box sx={{ display: "flex", gap: "24px", alignItems: "center", mb: "24px" }}>
                <Typography sx={{ width: "240px" }} variant="subtitle2" color="text.primary">Book Code</Typography>
                <TextField
                    sx={{ width: "372px" }}
                    variant="outlined"
                    name="Book Code"
                    disabled
                    value={"B0001"}
                    hiddenlabel="true"  
                    size="small"
                />
            </Box>
            <Box sx={{ display: "flex", gap: "24px", alignItems: "center", mb: "24px" }}>
                <Typography sx={{ width: "240px" }} variant="subtitle2" color="text.primary">Book Name</Typography>
                <TextField
                    sx={{ width: "372px" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenlabel="true"  
                    size="small"
                    placeholder="Book Name"
                />
            </Box>
            <Box sx={{ display: "flex", gap: "24px", alignItems: "center", mb: "24px" }}>
                <Typography sx={{ width: "240px" }} variant="subtitle2" color="text.primary">Book Category</Typography>
                <Autocomplete
                    hiddenlabel="true"
                    popupIcon={<DownArrow />}
                    size="small"
                    options={category}
                    sx={{ width: 372 }}
                    renderInput={(params) => <TextField placeholder="Select a Category" {...params} variant="outlined" />}
                />
                <Box sx={{ height: "36px", display: "flex", alignItems: "center", p: "6px 12px", cursor: "pointer" }} onClick={handleOpenCategoryModal}>
                    <AddIcon /> &nbsp; <Typography sx={{ color: "#05A043" }}>Add a New Category</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "24px", alignItems: "center", mb: "24px" }}>
                <Typography sx={{ width: "240px" }} variant="subtitle2" color="text.primary">Writer</Typography>
                <TextField
                    sx={{ width: "372px" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenlabel="true"   size="small"
                    placeholder="Writer"
                />
            </Box>
            <Box sx={{ display: "flex", gap: "24px", alignItems: "center", mb: "24px" }}>
                <Typography sx={{ width: "240px" }} variant="subtitle2" color="text.primary">Publisher</Typography>
                <Autocomplete
                    hiddenlabel="true"
                    popupIcon={<DownArrow />}
                    size="small"
                    options={publisher}
                    sx={{ width: 372 }}
                    renderInput={(params) => <TextField placeholder="Select a Category" {...params} variant="outlined" />}
                />
                <Box sx={{ height: "36px", display: "flex", alignItems: "center", p: "6px 12px", cursor: "pointer" }} onClick={handleOpenPublisher}>
                    <AddIcon /> &nbsp; <Typography sx={{ color: "#05A043" }}>Add a New Publisher</Typography>
                </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "24px", alignItems: "center", mb: "24px" }}>
                <Typography sx={{ width: "240px" }} variant="subtitle2" color="text.primary">Qty</Typography>
                <TextField
                    sx={{ width: "372px" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenlabel="true"  
                    size="small"
                    placeholder="Qty"
                    type="number"
                />
            </Box>
            <Box sx={{ display: "flex", gap: "24px", alignItems: "center", mb: "24px" }}>
                <Typography sx={{ width: "240px" }} variant="subtitle2" color="text.primary">Purchase Price</Typography>
                <TextField
                    sx={{ width: "372px" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenlabel="true"  
                    size="small"
                    placeholder="Purchase Price"
                    type="number"
                />
            </Box>
            <Box sx={{ display: "flex", gap: "24px", alignItems: "center", mb: "24px" }}>
                <Typography sx={{ width: "240px" }} variant="subtitle2" color="text.primary">Sell Price</Typography>
                <TextField
                    sx={{ width: "372px" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenlabel="true"  
                    size="small"
                    placeholder="Sell Price"
                    type='number'
                />
            </Box>
            <Box sx={{
                display: "flex",
                padding: "24px 0px",
                alignItems: "center",
                alignSelf: "stretch",
                gap: "24px",
                borderTop: "1px solid rgba(145, 158, 171, 0.24)"
            }}>
                <Button variant="outlined" sx={{ width: "120px" }}>Back</Button>
                <Button variant="contained" sx={{ width: "120px" }}>Save</Button>
            </Box>
            <AddCategory />
            <AddPublisher handleClosePublisher={handleClosePublisher} openPublisher={openPublisher} />
        </Box >
    )
}
