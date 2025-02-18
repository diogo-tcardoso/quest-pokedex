import './assets/styles/css/App.css'
import { AppRoutes } from './assets/routes/app-router'
import { ThemeProvider, useTheme } from './assets/context/theme-context'
import { GlobalStyle } from './assets/styles/global-style'
// import ThemeSwitch from './components/theme-switch/theme-switch'
import { Header } from './components/header'

function AppContent(){
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyle theme = {theme}/>
      <AppRoutes />
    </>
  )
}
function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <AppContent />
      </ThemeProvider>
    </>
  )
}

export default App
