import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { useContext } from "react";
import { EyeOff, EyeOn } from "../../Assets/Icons";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function InputFields() {
    const { email, password, showPassword, handleClickShowPassword, handleMouseDownPassword, handleLogin, setPassword, setEmail } = useContext(DataContext)

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%", mt: "40px", mb: "160px" }}>
            <TextField id="email"
                label="Your Email"
                variant="outlined"
                type="email"
                value={email}
                fullWidth
                onChange={(e) => setEmail(e.target.value)} />
            <FormControl sx={{}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <EyeOff /> : <EyeOn />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
            </FormGroup>
            <Button variant="contained" onClick={handleLogin}>Login</Button>
        </Box>
    )
}
