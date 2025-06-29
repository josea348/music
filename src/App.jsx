import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Dashboard from './components/organismo/Dashboard'
import NavbarWithMenu from './components/mleculas/NavbarWithMenu'

function App() {
  return (
    <BrowserRouter>
      <NavbarWithMenu />
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
