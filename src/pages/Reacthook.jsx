import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useState, useEffect } from 'react'

function Reacthook() {

    const [news_data, setNewsData] = useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-01-03&sortBy=publishedAt&apiKey=87200f6415824cd4827444d69a28716c")
            .then(response => response.json())
            .then(data => setNewsData(data.articles))
    }, []);

    return (
        <>
            <Header />

            <section className="blog container mt-5">
                <div className="section-heading text-center"><span>MADE THE HARD WAY</span>
                    <h2 className="section-title">Our News and Articles</h2>
                    <p>
                        Basel & Co. is a powerful eCommerce theme for Shopify. Visit our shop page to see all main features for Your Store
                    </p>
                </div>
                <div className="row gy-4">
                   {
                       news_data.map((items, index) => (
                           <div className="col-12 col-md-6 col-lg-4" key={index}>
                               <div className="blog-card">
                                   <img src={items.urlToImage} alt=""  className='img-fluid'/>
                                   <div className="blog-content">
                                       <div className="blog-date">{items.publishedAt}</div>
                                       <div className="blog-title">{items.title}</div>
                                       <div className="blog-description">{items.description}</div>                                       
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

export default Reacthook
