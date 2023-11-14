import React from "react";
import {Box,Button,Select,MenuItem} from "@mui/material"


export default props => {
    return(
        <Box p={2} mt={-5} mb={2} sx={{width: '100%', bgcolor: 'background.default',display: 'flex', boxShadow:'0px 1px 5px rgba(0,0,0,0.1)',borderRadius:'5px',"& > *":{flex:1,height:"45px",margin:"8px"}}}>
            <Select disableUnderline  variant="filled" defaultValue={"Full time"}>
                <MenuItem value='Full time'>Full time</MenuItem>
                <MenuItem value='Part time'>Part time</MenuItem>
                <MenuItem value='Contract'>Contract</MenuItem>
            </Select>

            <Select disableUnderline variant="filled" defaultValue={"Remote"}>
                <MenuItem value='Remote'>Remote</MenuItem>
                <MenuItem value='In Office'>In-Office</MenuItem>
            </Select>

            <Button variant="contained" disableElevation>
              Search
            </Button>
        </Box>
    )
}