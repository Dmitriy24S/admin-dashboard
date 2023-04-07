import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import { Box, IconButton, Typography, useTheme } from '@mui/material'
import { useState } from 'react'
import { Menu, MenuItem, ProSidebar } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Link } from 'react-router-dom'
import { colorsShades } from '../../theme/theme'

interface ItemProps {
  title: string
  to: string
  icon: React.ReactNode
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
  isCollapsed: boolean
}

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }: ItemProps) => {
  const theme = useTheme()
  const colors = colorsShades(theme.palette.mode)

  return (
    // <MenuItem
    <MenuItem
      active={selected === title}
      // icon={icon}
      // ! double hover focus buton + a href
      style={{ color: colors.gray[100], marginLeft: '7px' }}
    >
      <Link to={to} onClick={() => setSelected(title)}>
        {icon}
        {!isCollapsed && <Typography>{title}</Typography>}
      </Link>
      {/* <Link to={to} onClick={() => setSelected(title)} /> */}
    </MenuItem>
  )
}

const Sidebar = () => {
  const theme = useTheme()
  const colors = colorsShades(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState('Dashboard')

  return (
    <Box
      sx={{
        '& .pro-sidebar': {
          transition: 'none',
        },
        '& .pro-sidebar-inner': {
          backgroundColor: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          // padding: '5px 35px 5px 20px !important',
          cursor: 'pointer',
          // display: 'flex',
          // gap: '0.7rem',
          mb: '0.6rem',
          // listStyle: 'none',
        },
        '& .pro-inner-item a': {
          display: 'flex',
          gap: '0.7rem',
          width: '100%',
          padding: '5px 35px 5px 20px !important',
          minWidth: 'max-content',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important', // !
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important', // !
        },
        '& .pro-sidebar .pro-menu .pro-menu-item > .pro-inner-item:hover .pro-icon-wrapper .pro-icon':
          {
            animation: 'none',
          },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON */}
          {/* <MenuItem */}
          {/* // onClick={() => setIsCollapsed(!isCollapsed)} */}
          {/* // icon={<MenuOutlinedIcon />} */}
          {/* // icon={isCollapsed ? <MenuOutlinedIcon /> : undefined} */}
          {/* // style={{ */}
          {/* //   margin: '10px 0 20px 0', */}
          {/* //   color: colors.gray[100], */}
          {/* // }} */}
          {/* > */}
          {/* <IconButton
            onClick={() => setIsCollapsed(!isCollapsed)}
            sx={{ margin: '10px 0 20px 0' }}
          >
            <MenuOutlinedIcon />
          </IconButton> */}
          {/* {!isCollapsed && ( */}
          <Box
            display='flex'
            justifyContent='space-between'
            // justifyContent='center'
            alignItems='center'
            // ml='15px'
            // ml={!isCollapsed ? '15px' : '15px'}
            ml={!isCollapsed ? '15px' : '20px'}
            mt='5px'
            mb='15px'
            mr='15px'
            // mr={!isCollapsed ? '15px' : '0'}
            // mx='auto'
            sx={{
              cursor: 'pointer',
              // margin: '10px 0 20px 15px',
              '&:hover .MuiTypography-root': {
                color: '#868dfb',
              }, // !
              '&:hover .MuiIconButton-root': {
                color: '#868dfb',
              }, // !
            }}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {!isCollapsed && (
              <Typography variant='h3' color={colors.gray[100]}>
                ADMINS
              </Typography>
            )}
            <IconButton
              onClick={() => setIsCollapsed(!isCollapsed)}
              sx={
                {
                  // margin: '0 auto',
                  // !
                }
              }
            >
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
          {/* )} */}
          {/* </MenuItem> */}

          {/* USER */}
          {!isCollapsed && (
            <Box mb='25px' minWidth='max-content' overflow='hidden'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <img
                  alt='profile user'
                  width='100px'
                  height='100px'
                  src='./assets/user.png'
                  style={{
                    cursor: 'pointer',
                    borderRadius: '50%',
                  }}
                />
              </Box>
              <Box
                // display='flex'
                // justifyContent='center'
                // flexDirection='column'
                // alignItems='center'
                textAlign='center'
              >
                <Typography
                  variant='h2'
                  color={colors.gray[100]}
                  fontWeight='bold'
                  sx={{
                    m: '10px 0 0 0',
                  }}
                >
                  Dmitri S
                </Typography>
                <Typography
                  variant='h5'
                  color={colors.greenAccent[500]}
                  // minWidth='max-content'
                  // !
                >
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
        </Menu>

        {/* MENU ITEMS */}
        <Box paddingLeft={isCollapsed ? undefined : '10%'}>
          <Item
            title={'Dashboard'}
            to={'/'}
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Typography
            variant='h6'
            color={colors.gray[300]}
            sx={{
              m: '15px 0 10px 20px',
            }}
          >
            Data
          </Typography>
          <Item
            title={'Manage Team'}
            to={'/team'}
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title={'Contacts Information'}
            to={'/contacts'}
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title={'Invoices Balances'}
            to={'/invoices'}
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Typography
            variant='h6'
            color={colors.gray[300]}
            sx={{
              m: '15px 0 10px 20px',
            }}
          >
            Pages
          </Typography>
          <Item
            title={'Profile Form'}
            to={'/form'}
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title={'Calendar'}
            to={'/calendar'}
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title={'FAQ Page'}
            to={'/faq'}
            icon={<HelpOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Typography
            variant='h6'
            color={colors.gray[300]}
            sx={{
              m: '15px 0 10px 20px',
            }}
          >
            Charts
          </Typography>
          <Item
            title={'Bar Chart'}
            to={'/bar'}
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title={'Pie Chart'}
            to={'/pie'}
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title={'Line Chart'}
            to={'/line'}
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
          <Item
            title={'Geography'}
            to={'/geography'}
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
            isCollapsed={isCollapsed}
          />
        </Box>
      </ProSidebar>
    </Box>
  )
}

export default Sidebar
