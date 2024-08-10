import Searchbar from "./Searchbar";

const Navbar =()=>
{
    return <>
         <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>

        <Searchbar></Searchbar>

    </>
}


export default Navbar;