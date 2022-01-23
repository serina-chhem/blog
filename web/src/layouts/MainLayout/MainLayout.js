// import { Link, routes } from '@redwoodjs/router'
import Header from 'src/components/Header/Header'

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
