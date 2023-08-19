import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/home"
import { DestinationPage } from "./pages/destination"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        {/* <Route path="/crew" element={<Navigate to='/crew' />} />
        <Route path="/technology" element={<Navigate to='/technology' />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
