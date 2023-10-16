import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export const Contact = () => {
  return (
    <Box height={"100vh"} width={"100vw"} position="relative" sx={{backgroundColor: {xs:"white", sm:"#222222"}}}>
    <Box backgroundColor="white" p={{xs:0, sm:15}} position="absolute" top={"10%"} left={0} right={0} sx={{ml:"auto", mr:"auto"}} width="50vw" textAlign={"center"} style={{color: 'black'}} display="flex">
    {/* <Typography>Contact Me! <KeyboardDoubleArrowDown/> </Typography> */}

        <Stack direction="column" justifyContent={"center"} alignContent={"center"}  spacing={3}>
    <Typography fontSize={{xs:"4rem", sm: "5rem"}} fontFamily={"viaoda libre"}>Contact Me!</Typography>
          <a className="menu" href={`mailto:nikko.dote@gmail.com`} rel="noopener noreferrer">

   <Stack direction = "row" spacing={1}>
    <Email fontSize="large" /> <Typography variant="h6" fontFamily={"dela gothic one"}>Email</Typography>
            </Stack>
          </a>
            
            <a  className="menu" href="https://www.linkedin.com/in/nikkodote" rel="noopener noreferrer">
    <Stack direction = "row" spacing={1}>
    <LinkedIn fontSize="large" /> <Typography variant="h6"  fontFamily={"dela gothic one"}>LinkedIn</Typography>
            </Stack>
            </a>

          <a  className="menu" href="https://github.com/nikkodote-ai" rel="noopener noreferrer">
            <Stack direction = "row" spacing={1}>
    <GitHub fontSize="large" /> <Typography variant="h6"  fontFamily={"dela gothic one"}>Github</Typography>
            </Stack>
          </a>

          <a  className="menu" href="https://www.instagram.com/thenikkodote/">
          <Stack direction = "row" spacing={1}>
    <Instagram fontSize="large" /> <Typography variant="h6"  fontFamily={"dela gothic one"}>Instagram</Typography>
            </Stack>
          </a>

            </Stack>
    </Box>
    </Box>
  )
}
