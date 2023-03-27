import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import { ReactNode } from 'react'
import { colorsShades } from '../theme/theme'
import ProgressCircle from './ProgressCircle'

interface IProps {
  title: string
  subtitle: string
  icon: ReactNode
  progress: string
  increase: string
}

const StatBox = ({ title, subtitle, icon, progress, increase }: IProps) => {
  const theme = useTheme()
  const colors = colorsShades(theme.palette.mode)
  const isNonMobile = useMediaQuery('(min-width: 1000px)')

  return (
    <Box
      width='100%'
      p='20px'
      display='flex'
      flexDirection='column'
      gap='10px'
      justifyContent='space-between'
      height='100%'
      // minWidth='200px'
    >
      <Box
        display='flex'
        justifyContent='space-between'
        // flexDirection={isNonMobile ? 'row' : 'column'}
        gap='10px'
        // flexWrap='wrap'
        // flexWrap={isNonMobile ? undefined : 'wrap'}
        // p='20px'
        // marginBottom='auto'
      >
        <Box>
          {icon}
          <Typography
            variant='h4'
            fontWeight='bold'
            sx={{
              color: colors.gray[100],
            }}
          >
            {title}
          </Typography>
        </Box>
        {/* <Box
          display='flex'
          flexDirection='column'
          gap='10px'
          justifyContent='center'
          alignItems='center'
        > */}
        <Box display='flex' alignItems='center'>
          {/* <ProgressCircle progress={progress} /> */}
          <ProgressCircle progress={progress} size='23' />
        </Box>
      </Box>

      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        gap='10px'
        // flexDirection='column'
      >
        <Typography
          variant='h5'
          // textAlign='center'
          sx={{
            color: colors.greenAccent[500],
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant='h5'
          fontStyle='italic'
          sx={{
            color: colors.greenAccent[600],
          }}
        >
          {increase}
        </Typography>
      </Box>
      {/* </Box> */}
    </Box>
  )
}

export default StatBox
