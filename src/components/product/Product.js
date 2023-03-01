import ProductImages from './ProductImages'
import ProductDescription from './ProductDescription'

import '../../styles/Product.css'

const Product = props => {
    return (
        <div className='product__container'>
            <ProductImages />
            <ProductDescription />
        </div>
    )
}

export default Product
