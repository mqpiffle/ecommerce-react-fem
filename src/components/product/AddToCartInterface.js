import { useState } from 'react'

import plus from '../../images/icon-plus.svg'
import minus from '../../images/icon-minus.svg'
import cart from '../../images/icon-cart.svg'

import '../../styles/AddToCartInterface.css'

const AddToCartInterface = props => {
    const [productCount, setProductCount] = useState(0)

    console.log(productCount)

    const countHandler = input => {
        if (input === 'minus') {
            if (productCount === 0) {
                return
            } else {
                setProductCount(prev => prev - 1)
            }
        } else if (input === 'plus') {
            setProductCount(prev => prev + 1)
        }
    }

    return (
        <div className='atc-interface__container'>
            <div className='atc-interface__counter'>
                <img
                    src={minus}
                    alt='remove one'
                    className='atc-interface__minus'
                    onClick={() => countHandler('minus')}
                />
                <span className='atc-interface__display'>{productCount}</span>
                <img
                    src={plus}
                    alt='add one'
                    className='atc-interface__add'
                    onClick={() => countHandler('plus')}
                />
            </div>
            <button
                type='button'
                className='atc-interface__atc-btn'
            >
                <img
                    src={cart}
                    alt='atc'
                    width='16'
                />
                <span>Add to cart</span>
            </button>
        </div>
    )
}

export default AddToCartInterface
