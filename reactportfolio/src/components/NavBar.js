  
import React from "react";
// import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const mainPage = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link to= "/Home" class="nav-link" >Home</Link>
                    <Link to= "/About" class="nav-link" >About</Link>
                    <Link to= "/Portfolio" class="nav-link" >Portfolio</Link>
                    <Link to= "/ContactInfo" class="nav-link" >ContactInfo</Link>
                </li>         
            </ul>
        </div>
    </nav>
    )
}
export default mainPage