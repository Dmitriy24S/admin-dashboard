import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import CategoryHeader from '../../components/CategoryHeader'
import { mockDataInvoices } from '../../data/mockData'
import { colorsShades } from '../../theme/theme'

const Invoices = () => {
  const theme = useTheme()
  const colors = colorsShades(theme.palette.mode)

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 0.5,
      minWidth: 60,
      maxWidth: 80,
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
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      minWidth: 60,
      renderCell: (params: any) => (
        <Typography color={colors.greenAccent[500]}>${params.row.cost}</Typography>
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
      minWidth: 80,
      maxWidth: 100,
    },
  ]

  return (
    // <Box p={2}>
    <Box m='20px'>
      <CategoryHeader title='INVOICES' subtitle='The list of invoices balances' />
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
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          style={{
            // width: '100%',
            height: '75vh',
          }}
          rows={mockDataInvoices}
          columns={columns}
          checkboxSelection
        />
      </Box>
    </Box>
  )
}

export default Invoices
