import { Box, Grid, Typography } from "@mui/material";
import { AvgBookPrice, InventoryValue, RecentInventoryAdd, TotatBooks, TotatPublishers } from "../../Assets/Icons";

export default function StateCard() {
    const matrixData = [{
        id: 1,
        name: "Total Book",
        count: "6k"
    },
    {
        id: 2,
        name: "Total Publishers",
        count: "40"
    }, {
        id: 3,
        name: "New Inventory Added",
        count: "1055"
    }, {
        id: 4,
        name: "Average Book Price",
        count: "350tk"
    }, {
        id: 5,
        name: "Total Inventory Value",
        count: "60k"
    }]
    return (
        <Grid container spacing={1.5}>
            {matrixData.map((data) => {
                return (
                    <Grid item lg={2.4} key={data.id}>
                        <Box sx={{
                            display: "flex",
                            padding: "16px",
                            alignItems: "flex-start",
                            gap: "24px",
                            boxShadow: "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)", borderRadius: "6px"

                        }} >
                            <Box sx={{
                                display: "flex",
                                padding: "16px",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                gap: "24px",
                                width: "100%"
                            }}>
                                <Typography variant="body3" color="text.secondary">{data.name}</Typography>
                                <Typography variant="h1" color="text.primary">{data.count}</Typography>
                            </Box>
                            <Box>
                                {data.name === "Total Book" && <TotatBooks />}
                                {data.name === "Total Publishers" && <TotatPublishers />}
                                {data.name === "New Inventory Added" && <RecentInventoryAdd />}
                                {data.name === "Average Book Price" && <AvgBookPrice />}
                                {data.name === "Total Inventory Value" && <InventoryValue />}
                            </Box>
                        </Box >
                    </Grid>
                )
            })}
        </Grid>
    )
}
