import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../elements/Sidebar/'
import './index.scss'
import { useEffect, useState } from 'react'

const Layout = () => {
  const location = useLocation()
  const nonTopTagPages = ['/about', '/contact', '/portfolio', '/portfolio/advanced-robotics']
  let isNonTopTagPage = false;
  for (let i = 0; i < nonTopTagPages.length; i++) {
    if (location.pathname === nonTopTagPages[i]) {
      isNonTopTagPage = true
      break
    }
  }

  const nonBottomTagPages = ['/about', '/portfolio', '/contact', '/portfolio/advanced-robotics']
  let isNonBottompage = false;
  for (let i = 0; i < nonBottomTagPages.length; i++) {
    if (location.pathname === nonBottomTagPages[i]) {
      isNonBottompage = true;
      break;
    }
  }

  const [isWide, setIsWide] = useState(window.innerWidth > 1200)

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 1200)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        {(!isNonTopTagPage || isWide) && (
          <span className="tags top-tags">&lt;body&gt;</span>
        )}
        <Outlet />
        {(!isNonBottompage) && (<span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>)}
      </div>
    </div>
  )
}

export default Layout
