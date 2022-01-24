// import { Link, routes } from '@redwoodjs/router'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
