import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ShowcasePage from './components/ShowcasePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
      </Routes>
    </Router>
  )
}

export default App
