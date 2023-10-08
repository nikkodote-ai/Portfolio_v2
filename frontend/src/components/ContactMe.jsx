import { GitHub, Email, Instagram, LinkedIn} from '@mui/icons-material'
import { Box, Stack} from '@mui/material';
import {motion} from 'framer-motion';


export const ContactMe = () => {
  return (
    <Box  textAlign={"center"} style={{color: 'white'}} m={0} display="grid">
    {/* <Typography>Contact Me! <KeyboardDoubleArrowDown/> </Typography> */}
        <Stack direction="row" justifyContent={"center"} alignContent={"center"}  spacing={8}>
   <Email  fontSize='large'/>
    <LinkedIn fontSize="large" />
    <GitHub fontSize="large" />
    <Instagram fontSize="large" />

            </Stack>
    </Box>
  )
}
