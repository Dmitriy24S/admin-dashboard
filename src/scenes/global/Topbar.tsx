import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'
import SettingsOutlined from '@mui/icons-material/SettingsOutlined'

import { Box, IconButton, InputBase, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, colorsShades } from '../../theme/theme'

const Topbar = () => {
  const theme = useTheme()
  const colors = colorsShades(theme.palette.mode)
  // console.log('colors', colors)
  // {gray: {…}, primary: {…}, greenAccent: {…}, redAccent: {…}, blueAccent: {…}}
  const colorMode = useContext(ColorModeContext)

  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      {/* SEARCH BAR */}
      <Box
        display='flex'
        borderRadius='3px'
        sx={{ backgroundColor: colors.primary[400] }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display='flex'>
        <IconButton type='button' sx={{ p: 1 }} onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton type='button' sx={{ p: 1 }}>
          <NotificationsOutlined />
        </IconButton>
        <IconButton type='button' sx={{ p: 1 }}>
          <SettingsOutlined />
        </IconButton>
        <IconButton type='button' sx={{ p: 1 }}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Topbar
