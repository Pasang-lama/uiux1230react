import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

function Error() {
  return (
  <>
  <Header/>
  <section className="container my-5 py-5">
    <h1 className="text-center text-danger">404 Page not found</h1>
  </section>
  <Footer/>
  </>
  )
}

export default Error
