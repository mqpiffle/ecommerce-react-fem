import AddToCartInterface from './AddToCartInterface'

import '../../styles/ProductDescription.css'

const ProductDescrption = props => {
    return (
        <div className='product-description__container'>
            <h3 className='product-description__brand'>SNEAKER COMPANY</h3>
            <h1 className='product-description__style'>
                Fall Limited Edition Sneakers
            </h1>
            <p className='product-description__desc'>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </p>
            <div className='product-description__price-cont'>
                <div className='product-description__price-sub-cont'>
                    <h2 className='product-description__curr-price'>$125.00</h2>
                    <h4 className='product-description__discount'>50%</h4>
                </div>
                <p className='product-description__retail-price'>$250.00</p>
            </div>
            <AddToCartInterface />
        </div>
    )
}

export default ProductDescrption
