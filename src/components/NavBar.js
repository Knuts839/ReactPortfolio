  
import React from "react";
// import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const mainPage = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link to= "/Home" class="nav-link" >Home</Link>
                    <Link to= "/About" class="nav-link" >About</Link>
                    <Link to= "/Portfolio" class="nav-link" >Portfolio</Link>
                    <Link to= "/ContactInfo" class="nav-link" >ContactInfo</Link>
                </li>         
            </ul>
    </nav>
    )
}
export default mainPage