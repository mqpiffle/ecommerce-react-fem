import thumb1 from 'src/images/image-product-1-thumbnail.jpg'
import thumb2 from 'src/images/image-product-2-thumbnail.jpg'
import thumb3 from 'src/images/image-product-3-thumbnail.jpg'
import thumb4 from 'src/images/image-product-4-thumbnail.jpg'

const Thumbnails = props => {
    const { thumbClick } = props
    const thumbArray = [thumb1, thumb2, thumb3, thumb4]
    const thumbs = thumbArray.map((thumb, idx) => (
        <img
            src={thumb}
            alt='tiny but awesome kicks'
            onClick={() => thumbClick(idx)}
        />
    ))
    return <div>{thumbs}</div>
}
export default Thumbnails
