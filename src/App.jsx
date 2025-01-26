import BannerSlider from "./component/Banner"
import Footer from "./component/Footer"
import Header from "./component/Header"

function App() {
  return (
    <>
        <Header/>
        <section className="banner-section">
          <BannerSlider/>
        </section>
          <Footer/>
    </>
  )
}

export default App
