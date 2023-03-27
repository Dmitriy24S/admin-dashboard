import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import EmailIcon from '@mui/icons-material/Email'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import TrafficIcon from '@mui/icons-material/Traffic'

// TODO: split into components rows?
// TODO: mobile sizes?

import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import BarChart from '../../components/BarChart'
import CategoryHeader from '../../components/CategoryHeader'
import GeographyChart from '../../components/GeographyChart'
import LineChart from '../../components/LineChart'
import ProgressCircle from '../../components/ProgressCircle'
import StatBox from '../../components/StatBox'

import { mockTransactions } from '../../data/mockData'
import { colorsShades } from '../../theme/theme'

const Dashboard = () => {
  const theme = useTheme()
  const colors = colorsShades(theme.palette.mode)
  // const isNonMobile = useMediaQuery('(min-width: 600px)')
  // console.log(isNonMobile)

  return (
    <Box m='20px'>
      <Box display='flex' alignItems='center' justifyContent='space-between' gap='20px'>
        <CategoryHeader title='DASHBOARD' subtitle='Welcome to your dashboard' />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.gray[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: colors.blueAccent[600],
              },
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* GRID & CHARTS */}
      <Box
        display='grid'
        gridTemplateColumns='repeat(auto-fit, minmax(160px, 1fr))'
        // gridTemplateColumns='repeat(auto-fill, 1fr)'
        // gridTemplateColumns='repeat(12, minmax(25px, 1fr))'
        // gridTemplateColumns='repeat(12, minmax(30px, 1fr))'
        // gridTemplateColumns='repeat(auto-fit, minmax(100px, 1fr))'
        //
        // gridTemplateColumns='repeat(auto-fit, minmax(80px, 1fr))'
        // gridTemplateColumns='repeat(auto-fit, minmax(30px, 1fr))'
        // gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows='150px'
        gap='20px'
        marginBottom='20px'
      >
        {/* ROW 1 - 1 */}
        <Box
          // gridColumn='span 3'
          // gridColumn='span 2'
          display='flex'
          // flexDirection={isNonMobile ? 'row' : 'column'}
          alignItems='center'
          justifyContent='center'
          sx={{
            backgroundColor: colors.primary[400],
          }}
          // width='100%'
          // padding='20px'
          // width='fit-content'
        >
          <StatBox
            title='12,361'
            subtitle='Emails Sent'
            progress='0.75'
            increase='+14%'
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: '26px',
                }}
              />
            }
          />
        </Box>
        {/* ROW 1 - 2 */}
        <Box
          // gridColumn='span 3'
          // gridColumn='span 2'
          display='flex'
          alignItems='center'
          justifyContent='center'
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <StatBox
            title='431,225'
            subtitle='Sales Obtained'
            progress='0.5'
            increase='+21%'
            icon={
              <PointOfSaleIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: '26px',
                }}
              />
            }
          />
        </Box>
        {/* ROW 1 - 3 */}
        <Box
          // gridColumn='span 3'
          // gridColumn='span 2'
          display='flex'
          alignItems='center'
          justifyContent='center'
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <StatBox
            title='32,441'
            subtitle='New Clients'
            progress='0.30'
            increase='+5%'
            icon={
              <PersonAddIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: '26px',
                }}
              />
            }
          />
        </Box>
        {/* ROW 1 - 4 */}
        <Box
          // gridColumn='span 3'
          // gridColumn='span 2'
          display='flex'
          alignItems='center'
          justifyContent='center'
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <StatBox
            title='1,325,134'
            subtitle='Traffic Inbound'
            progress='0.80'
            increase='+43%'
            icon={
              <TrafficIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: '26px',
                }}
              />
            }
          />
        </Box>
      </Box>

      {/* ROW 2 - 1 */}
      <Box
        display='grid'
        gridTemplateColumns='repeat(auto-fit, minmax(260px, 1fr))'
        gridAutoRows='150px'
        gap='20px'
        marginBottom='20px'
      >
        <Box
          // gridColumn='span 8' // width
          gridRow='span 2' // height
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <Box
            mt='25px'
            p='0 30px'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
          >
            <Box>
              <Typography variant='h5' fontWeight='600' color={colors.gray[100]}>
                Revenue Generated
              </Typography>
              <Typography variant='h3' fontWeight='bold' color={colors.greenAccent[500]}>
                $59,342,32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: '26px',
                    color: colors.greenAccent[500],
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          {/* Content */}
          <Box
            height='250px'
            // ml='-20px'
            mt='-20px'
          >
            <LineChart isDashboard />
          </Box>
        </Box>
        {/* Grid end? */}

        {/* ROW 2 - 2 */}
        {/* TRANSACTIONS */}
        <Box
          // gridColumn='span 4'
          // gridColumn='span 8'
          gridRow='span 2'
          sx={{
            backgroundColor: colors.primary[400],
          }}
          overflow='auto'
        >
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            p='15px'
            sx={{
              borderBottom: `4px solid ${colors.primary[500]}`,
              color: colors.gray[100],
            }}
          >
            <Typography color={colors.gray[100]} variant='h5' fontWeight='600'>
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom={`4px solid ${colors.primary[500]}`}
              p='15px'
            >
              {/* ID / NAME */}
              <Box
                sx={{
                  minWidth: '110px',
                }}
              >
                <Typography color={colors.greenAccent[500]} variant='h5' fontWeight='600'>
                  {transaction.txId}
                </Typography>
                <Typography color={colors.gray[100]} variant='h5' fontWeight='600'>
                  {transaction.user}
                </Typography>
              </Box>
              {/* DATE */}
              <Box
                color={colors.gray[100]}
                sx={{
                  // minWidth: '110px',
                  minWidth: '80px',
                  // marginLeft: 'auto',
                  // marginRight: 'auto',
                  // textAlign: 'center',
                }}
              >
                {transaction.date}
              </Box>
              {/* COST */}
              <Box
                display='flex'
                sx={{
                  // minWidth: '110px',
                  minWidth: '80px',
                }}
              >
                <Box
                  ml='auto'
                  p='5px 10px'
                  borderRadius='4px'
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                  }}
                >
                  $ {transaction.cost}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* // TODO: split into components rows? */}
      {/* ROW 3 - 1 */}
      <Box
        display='grid'
        // gridTemplateColumns='repeat(auto-fill, 1fr)'
        gridTemplateColumns='repeat(auto-fit, minmax(260px, 1fr))'
        gridAutoRows='150px'
        gap='20px'
        marginBottom='20px'
      >
        <Box
          // gridColumn='span 4'
          gridRow='span 2'
          p='30px'
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography variant='h5' fontWeight='600'>
            Campaign
          </Typography>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mt='25px'
            // gap='10px'
          >
            {/* <ProgressCircle size='125' /> */}
            <ProgressCircle size='100' />
            <Typography
              variant='h5'
              color={colors.greenAccent[500]}
              sx={{
                mt: '15px',
              }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc. expenditures and costs</Typography>
          </Box>
        </Box>
        {/* ROW 3 - 2 */}
        <Box
          // gridColumn='span 4'
          gridRow='span 2'
          sx={{
            backgroundColor: colors.primary[400],
          }}
          p='30px'
        >
          <Typography
            variant='h5'
            fontWeight='600'
            sx={{
              mb: '15px',
            }}
          >
            Sales Quality
          </Typography>
          <Box height='250px' mt='-20px'>
            <BarChart isDashboard />
          </Box>
        </Box>
        {/* ROW 3 - 3 */}
        <Box
          // gridColumn='span 4'
          gridRow='span 2'
          sx={{
            backgroundColor: colors.primary[400],
          }}
          p='30px'
        >
          <Typography
            variant='h5'
            fontWeight='600'
            sx={{
              // p: '30px 30px 0px 30px',
              mb: '15px',
            }}
          >
            Geography Based Traffic{' '}
          </Typography>
          <Box height='200px'>
            <GeographyChart isDashboard />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard
