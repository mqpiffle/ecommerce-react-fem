import nextIcon from '../../images/icon-next.svg'
import previousIcon from '../../images/icon-previous.svg'

const ImageNav = props => {
    return (
        <div className='image-nav'>
            <img
                src={previousIcon}
                alt='previous'
            />
            <img
                src={nextIcon}
                alt='next'
            />
        </div>
    )
}

export default ImageNav
