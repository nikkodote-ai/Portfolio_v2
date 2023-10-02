import { RightBar } from './RightBar'
import { SideBar } from './SideBar'
import { Stack, Box, createTheme, ThemeProvider} from '@mui/material'
import { NavBar } from './NavBar'
import { Feed } from './Feed'
import { Add } from './Add'
import { useState } from 'react'

export const SocialMedia = () => {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
<Box bgcolor={"background.default"} color= {"text.primary"}>
<NavBar/>
    <Stack direction="row" spacing={2} justifyContent={'space-between'}>
        
        <SideBar setMode={setMode} mode={mode}/>
        <Feed/>
        <RightBar/>

        
    </Stack>
    <Add/>
</Box>
</ThemeProvider>
  )
}
