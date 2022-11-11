function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Panda</a>
            <ul>
                <li className="active"><a href="/about" >About</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/contact">Contact us</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;