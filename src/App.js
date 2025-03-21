import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
