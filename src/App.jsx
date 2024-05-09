
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <div id="content">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
