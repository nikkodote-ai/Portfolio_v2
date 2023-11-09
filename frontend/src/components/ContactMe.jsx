import { GitHub, Email, Instagram, LinkedIn} from '@mui/icons-material'
import { Box, Stack} from '@mui/material';
// import {motion} from 'framer-motion';

export const ContactMe = () => {
  return (


    <Box  textAlign={"center"} style={{color: 'white'}} m={0} display="grid">
    {/* <Typography>Contact Me! <KeyboardDoubleArrowDown/> </Typography> */}
        <Stack direction="row" justifyContent={"center"} alignContent={"center"}  spacing={8}>
          <a className="contact-icons" href={`mailto:nikko@nikkodote.com`} rel="noopener noreferrer">

   <Email  fontSize='large'/>
          </a>
            
            <a  className="contact-icons" href="https://www.linkedin.com/in/nikkodote" rel="noopener noreferrer">
    <LinkedIn fontSize="large" />

            </a>

          <a  className="contact-icons" href="https://github.com/nikkodote-ai" rel="noopener noreferrer">
    <GitHub fontSize="large" />
            
          </a>

          <a  className="contact-icons" href="https://www.instagram.com/bynikkodote/">
            
    <Instagram fontSize="large" />
          </a>

            </Stack>
    </Box>
  )
}
