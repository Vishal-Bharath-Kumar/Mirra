import Footer from "../components/Footer"
import ImageSlider from "../components/ImageSlider"
import MissionVision from "../components/MissionVision"
import ServicesOfferings from "../components/ServicesOfferings"
import Testimonials from "../components/Testimonials"
import Navbar from "../layout/Navbar"

const About = () => {
  return (
    <>
    <Navbar />
    <ImageSlider />
    <MissionVision />
    <ServicesOfferings />
    <Testimonials />
    <Footer />
    </>
  )
}

export default About