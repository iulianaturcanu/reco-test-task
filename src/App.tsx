import './App.css'
import { Box, Toolbar } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AppDiscovery } from './pages/AppsDiscovery'
import { drawerWidth, Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Box display='flex'>
          <Navbar />
        <Box component="main" sx={{flexGrow: 1, overflowY: 'auto', p: 3, width: `calc(100% - ${drawerWidth}px)`}}>
          <Toolbar>
            <Routes>
              <Route path="/" element={<Navigate to="/apps-discovery" replace/>}/>
              <Route path="/apps-discovery" element={<AppDiscovery />}/>
              {/* <Route path="/settings" element={<Settings />}/> */}
            </Routes>
          </Toolbar>
        </Box>
      </Box>
    </>
  )
}

export default App
