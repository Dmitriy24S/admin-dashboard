import { Box, Typography, useTheme } from '@mui/material'
import { colorsShades } from '../theme/theme'

interface IProps {
  title: string
  subtitle: string
}

const CategoryHeader = ({ title, subtitle }: IProps) => {
  const theme = useTheme()
  const colors = colorsShades(theme.palette.mode)

  return (
    <Box mb='30px'>
      <Typography
        variant='h2'
        color={colors.gray[100]}
        fontWeight='bold'
        sx={{
          mb: '5px',
        }}
      >
        {title}
      </Typography>
      <Typography variant='h5' color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  )
}

export default CategoryHeader
