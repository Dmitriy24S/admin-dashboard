import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import CategoryHeader from '../../components/CategoryHeader'
import { mockDataTeam } from '../../data/mockData'
import { colorsShades } from '../../theme/theme'

const Team = () => {
  const theme = useTheme()
  const colors = colorsShades(theme.palette.mode)

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      // ! mobile wide overflow hidden
      minWidth: 60,
      maxWidth: 70,
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1, // grow to 1 fr of size
      cellClassName: 'name-column--cell',
      minWidth: 120,
      maxWidth: 170,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      // headerAlign: 'left', // !
      // align: 'left', // !
      // justifyContent: 'center', // ! no
      align: 'center' as const, // !
      headerAlign: 'center' as const, // !
      minWidth: 50,
      maxWidth: 70,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
      minWidth: 100,
      maxWidth: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      headerAlign: 'center' as const, // !
      flex: 1,
      minWidth: 160,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      headerAlign: 'center' as const, // !
      flex: 1,
      minWidth: 170,

      renderCell: ({ row: { access } }: { row: { access: string } }) => {
        // customize cell, grab data from row->access
        return (
          <Box
            width='60%'
            m='0 auto'
            p='5px'
            display='flex'
            justifyContent='center'
            borderRadius='4px'
            sx={{
              backgroundColor:
                access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700],
            }}
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'security' && <LockOpenOutlinedIcon />}
            <Typography color={colors.gray[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        )
      },
    },
  ]

  return (
    <Box m='20px'>
      <CategoryHeader title='TEAM' subtitle='Managing the Team Members' />
      <Box
        m='40px 0 0 0'
        height='75vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
            // !
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiDataGrid-columnSeparator': {
            // color: colors.gray[400],
            // visibibility: 'invisible',
            // opacity: 0,
            color: 'rgba(0,0,0,0)',
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  )
}

export default Team
