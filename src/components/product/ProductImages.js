import { useState } from 'react'
import Thumbnails from './Thumbnails'

import image1 from '../../images/image-product-1.jpg'
import image2 from '../../images/image-product-2.jpg'
import image3 from '../../images/image-product-3.jpg'
import image4 from '../../images/image-product-4.jpg'

import '../../styles/ProductImages.css'

const ProductImages = props => {
    const kicksImages = [image1, image2, image3, image4]
    const [selectedImage, setSelectedImage] = useState(kicksImages[0])

    const handleThumbClick = idx => {
        setSelectedImage(kicksImages[idx])
    }

    return (
        <div className='product-images__container flex-clm-c'>
            <img
                className='product-images__main-image'
                src={selectedImage}
                alt='some really sweet kicks'
            />
            <Thumbnails thumbClick={handleThumbClick} />
        </div>
    )
}

export default ProductImages
