import { MetaTags } from '@redwoodjs/web'
import HomepageComponent from 'src/components/HomepageComponent/HomepageComponent'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <HomepageComponent />
    </>
  )
}

export default HomePage
