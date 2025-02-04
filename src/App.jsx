import BannerSlider from "./component/Banner"
import Category from "./component/Category"
import Footer from "./component/Footer"
import Header from "./component/Header"


function App() {


  
  return (
    <>
      <Header />
      <section className="banner-section">
        <BannerSlider />
      </section>

      <section className="category container mt-5">
        <div className="section-heading text-center"><span>MADE THE HARD WAY</span>
          <h2 className="section-title">FEATURED CATEGORIES</h2>
          <p>
            Basel & Co. is a powerful eCommerce theme for Shopify. Visit our shop page to see all main features for Your Store
          </p>
        </div>

        <Category />
      </section>
      <Footer />
    </>
  )
}

export default App
