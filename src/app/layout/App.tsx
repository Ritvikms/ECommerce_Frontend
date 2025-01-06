
import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './Header';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette:{
      mode: palleteType,
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
    return (
     <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>
     <CssBaseline/>
     <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
     <Container maxWidth={false} sx={{paddingTop: "64px"}}>
      <Outlet/>
     </Container>
     </ThemeProvider>
  )
}

export default App
