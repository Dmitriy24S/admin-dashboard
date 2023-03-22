import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './scenes/global/Topbar'
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
          <Topbar />
          <main className='content'>Content</main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
