import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Headder = () =>{

    return <>
     <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
       <Navbar></Navbar>
      
    </header>
    </>
}

export default Headder;