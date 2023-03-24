import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import CategoryHeader from '../../components/CategoryHeader'
import { mockDataContacts } from '../../data/mockData'
import { colorsShades } from '../../theme/theme'

const Contacts = () => {
  const theme = useTheme()
  const colors = colorsShades(theme.palette.mode)

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 0.5,
      width: 60,
      maxWidth: 80,
    },
    { field: 'registrarId', headerName: 'Registrar ID', width: 100 },
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
      flex: 1,
      minWidth: 160,
    },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
      minWidth: 160,
    },
    {
      field: 'city',
      headerName: 'City',
      // flex: 1,
      minWidth: 80,
      maxWidth: 100,
    },
    {
      field: 'zipCode',
      headerName: 'Zipcode',
      // flex: 1,
      minWidth: 80,
      maxWidth: 100,
    },
  ]

  return (
    // <Box p={2}>
    <Box m='20px'>
      <CategoryHeader
        title='CONTACTS'
        subtitle='The list of contacts for future reference'
      />
      <Box
        m='40px 0 0 0'
        // height='75vh'
        // width='100%'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .name-column--cell': {
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
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.gray[100]} !important`,
          },
          '& .MuiDataGrid-panelFooter .MuiButton-text': {
            color: `${colors.gray[100]} !important`,
          },
          '& .MuiButton-text': {
            color: `${colors.gray[100]} !important`,
          },
          '& .MuiDataGrid-panelFooter .MuiButtonBase-root-MuiButton-root': {
            color: `${colors.gray[100]} !important`,
          },
          '& .MuiButtonBase-root.MuiButton-root.MuiButton-text': {
            color: `${colors.gray[100]} !important`,
          },
          '& .MuiDataGrid-columnSeparator': {
            // color: colors.gray[400],
            // visibibility: 'invisible',
            // opacity: 0,
            color: 'rgba(0,0,0,0)',
          },
        }}
      >
        <DataGrid
          style={{
            // width: '100%',
            height: '75vh',
          }}
          rows={mockDataContacts}
          columns={columns}
          // components={{ Toolbar: GridToolbar }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            panel: {
              sx: {
                // '& .MuiDataGrid-filterForm': {
                // bgcolor: 'lightblue',
                // },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: `${colors.gray[100]} !important`,
                },
                '& .MuiDataGrid-panelFooter .MuiButton-text': {
                  color: `${colors.gray[100]} !important`,
                },
                '& .MuiSwitch-switchBase': {
                  color: `${colors.gray[100]} !important`,
                },
                '& .MuiSwitch-track ': {
                  backgroundColor: `${colors.blueAccent[500]} !important`,
                },
                '& .MuiInput-root:after ': {
                  borderBottom: `2px solid ${colors.blueAccent[500]} !important`,
                },
              },
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default Contacts
