import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-blue-900">
      <Navbar />
      <HeroSection />
      {/* Other sections will be added here later */}
    </div>
  )
}

export default App
