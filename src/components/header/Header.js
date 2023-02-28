import Menu from './Menu'

import menuIcon from '../../images/icon-menu.svg'
import cartIcon from '../../images/icon-cart.svg'
import avatar from '../../images/image-avatar.png'
import logo from '../../images/logo.svg'

import '../../styles/Header.css'

const Header = props => {
    return (
        <header className='header-container flex-row-c'>
            <div className='header-left__container flex-row-c'>
                {/* div with the brand and menu so we can change flex-direction on mobile view */}
                <button className='header-left__hamburger'>
                    <img
                        src={menuIcon}
                        alt='menu'
                        className='icon'
                    />
                </button>
                <div className='header-left__brand'>
                    <img
                        src={logo}
                        alt='logo'
                    />
                </div>
                <nav>
                    <Menu />
                </nav>
            </div>
            <div className='header-right__container flex-row-c'>
                <button>
                    <img
                        src={cartIcon}
                        alt='cart'
                        className='icon'
                    />
                </button>
                <button>
                    <img
                        src={avatar}
                        alt='cart'
                        className='avatar'
                    />
                </button>
            </div>
        </header>
    )
}

export default Header
