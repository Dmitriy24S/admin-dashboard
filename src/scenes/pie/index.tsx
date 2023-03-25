import { Box } from '@mui/material'
import CategoryHeader from '../../components/CategoryHeader'
import PieChart from '../../components/PieChart'

const Pie = () => {
  return (
    <Box m='20px' height='75vh'>
      <CategoryHeader title='PIE CHART' subtitle='Nivo Pie Chart' />
      <PieChart />
    </Box>
  )
}

export default Pie
