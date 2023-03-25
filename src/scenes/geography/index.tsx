import { Box } from '@mui/material'
import CategoryHeader from '../../components/CategoryHeader'
import GeographyChart from '../../components/GeographyChart'

const Geography = () => {
  return (
    <Box m='20px' height='75vh'>
      <CategoryHeader title='GEOGRAPHY CHART' subtitle='Nivo Geography Chart' />
      <GeographyChart />
    </Box>
  )
}

export default Geography
