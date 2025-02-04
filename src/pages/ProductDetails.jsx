import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function ProductDetails() {

    const { id } = useParams()

    const [product_data, setProductdata] = useState([])

    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProductdata(data))
    }, [])

    const result = product_data.find(item => item.id == id)

    return (
        <>

            <Header />
            <section className="container my-5">
                <h1>Product: {result?.title}</h1>

                <div className="row gy-4">
                    <div className="col-lg-4">
                        <img src={result?.image} className='img-fluid' alt="" />
                    </div>
                    <div className="col-lg-8">
                        <span>{result?.category}</span>  <i className='text-warning'>{result?.rating?.rate}(Review)</i>
                        <h3 className="product-title">{result?.title}</h3>
                        <p>{result?.description}</p>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default ProductDetails
