import './App.scss'
import 'typeface-roboto-mono'
import { Route, Routes } from 'react-router-dom'

// components
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

// pages 
import Home from './components/pages/Home'
import All from './components/pages/All'
import Information from './components/pages/Information'
import Design from './components/pages/Design'
import UX from './components/pages/UX'
import UI from './components/pages/UI'
import Typography from './components/pages/Typography'
import Error from './components/pages/Error'


export default function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='All' element={<All />} />
            <Route path='Information' element={<Information />} />
            <Route path='Design' element={<Design Theory />} />
            <Route path='UX' element={<UX />} />
            <Route path='UI' element={<UI />} />
            <Route path='Typography' element={<Typography />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}






