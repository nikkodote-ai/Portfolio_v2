import { Box, Stack, Typography } from '@mui/material'
import { PuffLoader } from 'react-spinners'

export const PageLoader = (props) => {
  return (
    
    <Box sx={{
        textAlign:"center",
        backgroundColor: "#fff1c8",
        height:"100vh",
        width:"100vw",
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
      }}>
        <Stack direction="column" spacing={4}>
          <Box width="70vw" zIndex={1} container spacing={3}>
          
        <Typography mb={2.5} lineHeight={0.9} sx={{color:"#ff8652", fontFamily:"inter", fontSize:"4.5rem", fontWeight:"bold"}}>
          Hey! I&apos;m Nikko!</Typography>


          <Typography mb={2.5} lineHeight={0.9} sx={{color:"#62d0ff", fontFamily:"inter", fontSize:"3rem", fontWeight:"bold"}}>
          welcome to my playground.</Typography>

          <Typography lineHeight={0.9} fontStyle="italic" sx={{color:"#ff8652", fontFamily:"viaoda libre", fontSize:"2rem", fontWeight:"bold"}}>
          this site is made from django | python, react | js, MUI and a lot of love.
          </Typography>

          <Box m={3} display="flex" textAlign={"center"} justifyItems={"center"} alignContent={'center'} justifyContent={"center"}>



          <PuffLoader
  color="#ff8652"
  loading={props.loading}
  size={100}
  aria-label="Loading Spinner"
  data-testid="loader"
  />
  </Box>
        </Box>
        </ Stack>

        <Typography className="marquee" sx={{
  color:"white",
  fontFamily:"viaoda libre",
  fontSize:"65rem",
  position:"fixed",
  left:0,
  bottom:"-45vh",
  zIndex:0,
}}>
  Welcome
</Typography>
        </Box>
  )
}
