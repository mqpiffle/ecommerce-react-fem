const ProductDescrption = props => {
    return (
        <div className="product-description__container">
            <h3 className="product-description__brand"></h3>
            <h1 className="product-description__style"></h1>
            <p className="product-description__desc"></p>
            <div className="product-description__price-cont">
                <h2 className="product-description__curr-price"></h2>
                <h4 className="product-description__discout"></h4>
            </div>
            <p className="product-description__retail-price"></p>
        </div>
    )
}

export default ProductDescrption
