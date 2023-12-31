import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
    <nav>
        <Link to="/">Posts List</Link>
        {" | "}
        <Link to="/posts/new">Create New Post</Link>
    </nav>
    )
}

export default NavBar;