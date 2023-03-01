import thumb1 from '../../images/image-product-1-thumbnail.jpg'
import thumb2 from '../../images/image-product-2-thumbnail.jpg'
import thumb3 from '../../images/image-product-3-thumbnail.jpg'
import thumb4 from '../../images/image-product-4-thumbnail.jpg'

const Thumbnails = props => {
    const { thumbClick } = props
    const thumbArray = [thumb1, thumb2, thumb3, thumb4]
    const thumbs = thumbArray.map((thumb, idx) => (
        <img
            className='product-images__thumb'
            src={thumb}
            alt='tiny but awesome kicks'
            onClick={() => thumbClick(idx)}
        />
    ))
    return <div className='product-images__thumbs-container flex-row-c'>{thumbs}</div>
}
export default Thumbnails
