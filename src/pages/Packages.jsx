import Navbar from '../layout/Navbar'
import PackageListings from '../components/PackageListings'
import GetCallback from '../components/GetCallback'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'

const Packages = () => {
  return (
    <>
    <Navbar />
    <HeroBanner />
    <PackageListings />
    <GetCallback />
    <Footer />
    </>
  )
}

export default Packages