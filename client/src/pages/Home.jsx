import Header from "../components/navbar/Header"
import Poster from "../components/presentation/Poster"
import MainContentSection from "../components/content/MainContentSection"
import Footer from "../components/footer/Footer"

const Home = () => {
  return (
    <div className="w-full h-screen">
      <Header />
      <Poster />
      <MainContentSection />
      <Footer />
    </div>
  )
}

export default Home
