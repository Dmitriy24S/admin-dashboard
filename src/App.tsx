import { CssBaseline, ThemeProvider } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Bar from './scenes/bar'
import Calendar from './scenes/calendar'
import Contacts from './scenes/contacts'
import Dashboard from './scenes/dashboard'
import FAQ from './scenes/faq'
import Form from './scenes/form'
import Geography from './scenes/geography'
import Sidebar from './scenes/global/Sidebar'
import Topbar from './scenes/global/Topbar'
import Invoices from './scenes/invoices'
import Line from './scenes/line'
import Pie from './scenes/pie'
import Team from './scenes/team'
import { ColorModeContext, useMode } from './theme/theme'

function App() {
  const [theme, colorMode] = useMode()
  // console.log('theme', theme)
  // theme: {
  // breakpoints: {keys: Array(5), values: {…}, up: ƒ, down: ƒ, between: ƒ, …}
  // components: {}
  // direction: "ltr"
  // mixins: {toolbar: {…}}
  // palette: {mode: 'dark', primary: {…}, secondary: {…}, neutral: {…}, background: {…}, …}
  // console.log('colorMode', colorMode)
  // {toggleColorMode: ƒ}

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <main className='content'>
            <Topbar />
            <Sidebar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/calendar' element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
