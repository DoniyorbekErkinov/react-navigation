import {Fragment} from "react";
import {Link, Outlet} from "react-router-dom";

function Navbar() {
    return (
        <Fragment>

        <nav className="nav">
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
        </nav>
            <Outlet/>
        </Fragment>
    )
}
export default Navbar;