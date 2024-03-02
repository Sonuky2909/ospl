import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'


function App() {


  return (
    <>
      <main>
        <Navbar />
        <Outlet/>
        <Footer/>
      </main>
    </>
  )
}

export default App
