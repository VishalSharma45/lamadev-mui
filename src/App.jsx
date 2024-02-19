import { Box, Stack, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import Sidebar from './Components/Sidebar'
import Navbar from './Components/Navbar'
import Rightbar from './Components/Rightbar'
import Feed from './Components/Feed'
import Add from './Components/Add'
import { useState } from 'react'

const App = () => {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App