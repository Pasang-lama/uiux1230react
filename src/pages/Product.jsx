import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function Product() {
    const [product_data, setProductdata] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProductdata(data))
    }, [])

    console.log(product_data)

    return (
        <>
            <Header />
            <section className="container my-5">
                <h1>Products</h1>
                <div className="row gy-4">
                    {
                        product_data.map((items, index) => (
                            <div className="col-lg-3">
                                <div className="product-card">
                                    <img src={items.image} className='img-fluid' height={200} alt="" />
                                    <span>{items.category}</span>
                                    <h3 className="product-title">{items.title}</h3>
                                    <div className="price">${items.price}</div>
                                    <div className="action-btn d-flex gap-3">
                                        <button className="btn btn-primary">Add to cart</button>
                                        <Link to={`/product/${items.id}`} className="btn btn-primary">Learn Now</Link>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Product
