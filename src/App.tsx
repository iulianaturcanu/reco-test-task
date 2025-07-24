import viteLogo from '/vite.svg'
import './App.css'
import { Box } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Box>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Navigate to="/apps-discovery" replace/>}/>
          {/* <Route path="/apps-discovery" element={<AppDiscovery />}/>
          <Route path="/settings" element={<Settings />}/> */}
        </Routes>
      </Box>
    </>
  )
}

export default App
