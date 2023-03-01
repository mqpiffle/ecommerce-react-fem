import Header from './header/Header'

const Layout = ({ children }) => {
    return (
        <div className='main-container'>
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default Layout
