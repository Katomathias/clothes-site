import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Products from './pages/home/Products'
import Heels from './pages/heels/Heels'
import Dresses from './pages/dresses/Dresses'
import Fashion from './pages/fashion/Fashion'
import Shoes from './pages/shoes/Shoes'
import Shorts from './pages/shorts/Shorts'
import './Style.css';
import './Stylee.css';
import Entry from './pages/Entry'
import Footer from './components/Footer'

const App = () => {
  return (
    
    <div>
    <Header/>
    <Routes>  
    <Route path="/" element={<Entry />}/>
    <Route path="/featured" element={<Products />}/>
    
    <Route path="/heels" element={<Heels/>}/>
    <Route path="/dresses" element={<Dresses/>}/>
    <Route path="/fashion" element={<Fashion/>}/>
    <Route path="/shoes" element={<Shoes/>}/>
    <Route path="/shorts" element={<Shorts/>}/>
    </Routes>
    <Footer/>
   </div>
  )
}

export default App
