import { Box, Button, TextField, Typography, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Formik } from 'formik'
import * as yup from 'yup'
import CategoryHeader from '../../components/CategoryHeader'
import { colorsShades } from '../../theme/theme'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: '',
}

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const userSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  contact: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
  address1: yup.string().required('Required'),
  address2: yup.string().required('Required'),
})

const Form = () => {
  const theme = useTheme()
  const colors = colorsShades(theme.palette.mode)
  const isNonMobile = useMediaQuery('(min-width: 600px)')

  const handleFormSubmit = (values: typeof initialValues) => {
    console.log('handleFormSubmit values:', values)
  }

  return (
    <Box m='20px'>
      <CategoryHeader title='CREATE USER' subtitle='Create a new user profile' />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            <Box
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat(4, minmax(0, 1fr))'
              sx={{
                '& > div': {
                  gridColumn: isNonMobile ? undefined : 'span 4', // 4 - entire line // !
                },
              }}
              // maxWidth='500px'
              // m='0 auto'
            >
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='First Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name='firstName'
                error={!!touched.firstName && !!errors.firstName} // force to be boolean // !
                helperText={touched.firstName && errors.firstName}
                sx={{
                  gridColumn: 'span 4',
                  '& .Mui-focused:not(.Mui-error)': {
                    // '& .Mui-focused': {
                    // color: 'green !important',
                    color: `${colors.blueAccent[400]} !important`,
                  },
                  // '& .Mui-error': {
                  //   color: `#f44336 !important`,
                  // },
                  '& .Mui-focused:not(.Mui-error):after': {
                    // '& .Mui-focused:after': {
                    // borderBottomColor: 'green !important',
                    borderBottomColor: `${colors.blueAccent[400]} !important`,
                  },
                  // '& .Mui-error:after': {
                  //   borderBottomColor: `#f44336 !important`,
                  // },
                }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Last Name'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name='lastName'
                error={!!touched.lastName && !!errors.lastName} // force to be boolean // !
                helperText={touched.lastName && errors.lastName}
                sx={{
                  gridColumn: 'span 4',
                  '& .Mui-focused:not(.Mui-error)': {
                    color: `${colors.blueAccent[400]} !important`,
                  },
                  '& .Mui-focused:not(.Mui-error):after': {
                    borderBottomColor: `${colors.blueAccent[400]} !important`,
                  },
                }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Email'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name='email'
                error={!!touched.email && !!errors.email} // force to be boolean // !
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: 'span 4',
                  '& .Mui-focused:not(.Mui-error)': {
                    color: `${colors.blueAccent[400]} !important`,
                  },
                  '& .Mui-focused:not(.Mui-error):after': {
                    borderBottomColor: `${colors.blueAccent[400]} !important`,
                  },
                }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Contact'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name='contact'
                error={!!touched.contact && !!errors.contact} // force to be boolean // !
                helperText={touched.contact && errors.contact}
                sx={{
                  gridColumn: 'span 4',
                  '& .Mui-focused:not(.Mui-error)': {
                    color: `${colors.blueAccent[400]} !important`,
                  },
                  '& .Mui-focused:not(.Mui-error):after': {
                    borderBottomColor: `${colors.blueAccent[400]} !important`,
                  },
                }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Address 1'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name='address1'
                error={!!touched.address1 && !!errors.address1} // force to be boolean // !
                helperText={touched.address1 && errors.address1}
                sx={{
                  gridColumn: 'span 4',
                  '& .Mui-focused:not(.Mui-error)': {
                    color: `${colors.blueAccent[400]} !important`,
                  },
                  '& .Mui-focused:not(.Mui-error):after': {
                    borderBottomColor: `${colors.blueAccent[400]} !important`,
                  },
                }}
              />
              <TextField
                fullWidth
                variant='filled'
                type='text'
                label='Address 2'
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name='address2'
                error={!!touched.address2 && !!errors.address2} // force to be boolean // !
                helperText={touched.address2 && errors.address2}
                sx={{
                  gridColumn: 'span 4',
                  '& .Mui-focused:not(.Mui-error)': {
                    color: `${colors.blueAccent[400]} !important`,
                  },
                  '& .Mui-focused:not(.Mui-error):after': {
                    borderBottomColor: `${colors.blueAccent[400]} !important`,
                  },
                }}
              />
            </Box>
            <Box display='flex' justifyContent='end' mt='20px'>
              <Button type='submit' variant='contained' color='secondary'>
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

export default Form
