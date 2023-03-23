import { Box } from '@mui/material'
import CategoryHeader from '../../components/CategoryHeader'

const Dashboard = () => {
  return (
    <Box m='20px'>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <CategoryHeader title='DASHBOARD' subtitle='Welcome to your dashboard' />
      </Box>
    </Box>
  )
}

export default Dashboard
