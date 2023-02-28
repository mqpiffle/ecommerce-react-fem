const Menu = props => {
    const menuItems = ['Collections', 'Mens', 'Womens', 'About', 'Contact']

    const menuMap = menuItems.map((item, idx) => (
        <li
            key={idx}
            className='header-left__menu-item'
        >
            <p>{item}</p>
        </li>
    ))
    return <ul className='header-left__menu'>{menuMap}</ul>
}

export default Menu
