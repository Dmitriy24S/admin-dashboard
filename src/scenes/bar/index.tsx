import { Box } from '@mui/material'
import BarChart from '../../components/BarChart'
import CategoryHeader from '../../components/CategoryHeader'

const Bar = () => {
  return (
    <Box m='20px' height='75vh'>
      <CategoryHeader title='BAR CHART' subtitle='Nivo Bar Chart' />
      <BarChart />
    </Box>
  )
}

export default Bar
