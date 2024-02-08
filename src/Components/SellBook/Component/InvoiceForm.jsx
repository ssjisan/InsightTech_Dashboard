import { Box, Button, TextField, Typography } from "@mui/material";
import { AddIcon } from "../../../Assets/Icons";

export default function InvoiceForm() {
    return (
        <Box sx={{ padding: "16px 24px 0px 24px", borderRight: "1px dashed #919EAB"}}>
            <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "center", mb: "16px" }}>
                <Typography sx={{ width: "100%" }} variant="subtitle2" color="text.primary">Invoice Id</Typography>
                <TextField
                    sx={{ width: "100%" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenLabel
                    size="small"
                    placeholder="Category Name"
                />
            </Box>
            <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "center", mb: "16px" }}>
                <Typography sx={{ width: "100%" }} variant="subtitle2" color="text.primary">Book Code</Typography>
                <TextField
                    sx={{ width: "100%" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenLabel
                    size="small"
                    placeholder="Category Name"
                />
            </Box>
            <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "center", mb: "16px" }}>
                <Typography sx={{ width: "100%" }} variant="subtitle2" color="text.primary">Book Name</Typography>
                <TextField
                    sx={{ width: "100%" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenLabel
                    size="small"
                    placeholder="Category Name"
                />
            </Box>
            <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "center", mb: "16px" }}>
                <Typography sx={{ width: "100%" }} variant="subtitle2" color="text.primary">Writer Name</Typography>
                <TextField
                    sx={{ width: "100%" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenLabel
                    size="small"
                    placeholder="Category Name"
                />
            </Box>
            <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "center", mb: "16px" }}>
                <Typography sx={{ width: "100%" }} variant="subtitle2" color="text.primary">Publisher Name</Typography>
                <TextField
                    sx={{ width: "100%" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenLabel
                    size="small"
                    placeholder="Category Name"
                />
            </Box>
            <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "center", mb: "16px" }}>
                <Typography sx={{ width: "100%" }} variant="subtitle2" color="text.primary">Category Name</Typography>
                <TextField
                    sx={{ width: "100%" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenLabel
                    size="small"
                    placeholder="Category Name"
                />
            </Box>
            <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "center", mb: "16px" }}>
                <Typography sx={{ width: "100%" }} variant="subtitle2" color="text.primary">Stock</Typography>
                <TextField
                    sx={{ width: "100%" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenLabel
                    size="small"
                    placeholder="Category Name"
                />
            </Box>
            <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "center", mb: "16px" }}>
                <Typography sx={{ width: "100%" }} variant="subtitle2" color="text.primary">Sell Qty</Typography>
                <TextField
                    sx={{ width: "100%" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenLabel
                    size="small"
                    placeholder="Category Name"
                />
            </Box>
            <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", alignItems: "center", mb: "16px" }}>
                <Typography sx={{ width: "100%" }} variant="subtitle2" color="text.primary">Sell Price</Typography>
                <TextField
                    sx={{ width: "100%" }}
                    variant="outlined"
                    name="Book Name"
                    hiddenLabel
                    size="small"
                    placeholder="Category Name"
                />
            </Box>
            <Button startIcon={<AddIcon />} sx={{width:"100%"}}>Add To List</Button>
        </Box>
    )
}
