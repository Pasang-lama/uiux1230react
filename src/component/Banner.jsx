import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    alldevice: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    }

};
function Banner(props) {
    return (

        <div className='banner-items'>
            <img src={props.data.img} alt="" className='img-fluid' />
            <div className="banner-content">
                <div className="banner-heading">{props.data.heading}</div>
                <div className="banner-subheading">{props.data.subheading}</div>
                <a href="">Shop Now</a>
            </div>
        </div>
    )
}

function BannerSlider() {
    const bannerdata = [
        {
            id: 1,
            img: "https://new-basel2.myshopify.com/cdn/shop/files/highcompress-slider_2.jpg?v=1613716582",
            heading: "New Style",
            subheading: "Boots Collections for men",
        },
        {
            id: 2,
            img: "https://new-basel2.myshopify.com/cdn/shop/files/highcompress-slider_1.jpg?v=1613716582",
            heading: "Man Bag",
            subheading: "new Men Collection",
        },
        {
            id: 3,
            img: "https://new-basel2.myshopify.com/cdn/shop/files/highcompress-slider_1.jpg?v=1613716582",
            heading: "New added ",
            subheading: "new Men Collection",
        }
    ]
    return (
        <Carousel responsive={responsive}   swipeable={true}   draggable={true}>
            {
                bannerdata.map((items, index) => (
                    <Banner key={index} data={items} />
                ))
            }

        </Carousel>

    )
}
export default BannerSlider
