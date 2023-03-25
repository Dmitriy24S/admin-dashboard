import { Box } from '@mui/material'
import CategoryHeader from '../../components/CategoryHeader'
import LineChart from '../../components/LineChart'

const Line = () => {
  return (
    <Box m='20px' height='75vh'>
      <CategoryHeader title='LINE CHART' subtitle='Nivo Line Chart' />
      <LineChart />
    </Box>
  )
}

export default Line
