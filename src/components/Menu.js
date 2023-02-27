const Menu = props => {
    const menuItems = ['Collections', 'Mens', 'Womens', 'About', 'Contact']

    const menuMap = menuItems.map((item, idx) => (
        <li
            key={idx}
            className='header-left__menu-item'
        >
            <h4>{item}</h4>
        </li>
    ))
    return <ul className='header-left__menu'>{menuMap}</ul>
}

export default Menu
