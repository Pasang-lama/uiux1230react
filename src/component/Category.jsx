import React from 'react'

function Category() {
    const category_data = [
        {
            id: 1,
            img: "https://new-basel2.myshopify.com/cdn/shop/files/cat-bag-5_670x.jpg?v=1613716577",
            title: "Bag"
        },
        {
            id: 2,
            img: "https://new-basel2.myshopify.com/cdn/shop/files/boot-category-1-3-min_303x.jpg?v=1613716583",
            title: "Footware"
        },
        {
            id: 3,
            img: "https://new-basel2.myshopify.com/cdn/shop/files/cat-watch-2_303x.jpg?v=1613716577",
            title: "Watches"
        },
        {
            id: 4,
            img: "https://new-basel2.myshopify.com/cdn/shop/files/wooman-cat_303x.jpg?v=1613716577",
            title: "Women"
        }

    ]
    
    return (
        <>
            <div className="category-wrapper">
                {
                    category_data.map((items, index) => (
                        <div className="category-items" key={index}>
                            <img src={items.img} alt="" className="img-fluid" />
                            <h3 className='category-title'>{items.title}</h3>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Category
