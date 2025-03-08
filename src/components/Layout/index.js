import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
import { useEffect, useState } from 'react'

const Layout = () => {
  const location = useLocation()
  const nonTopTagPages = ['/about', '/contact']
  let isNonTopTagPage = false;
  for (let i = 0; i < nonTopTagPages.length; i++) {
    console.log(nonTopTagPages[i])
    if (location.pathname === nonTopTagPages[i]) {
      isNonTopTagPage = true
      break
    }
  }
  console.log(isNonTopTagPage)

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
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
