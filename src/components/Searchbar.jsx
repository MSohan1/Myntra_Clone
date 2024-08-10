import { IoMdPerson,IoMdHeart } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const Searchbar = () =>{

    const bag = useSelector((store)=> store.bagItems);


    
    

    return <>
          <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
            <IoMdPerson />                
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
                <IoMdHeart />
                <span className="action_name">Wishlist</span>
            </div>

            <Link className="action_container" to="/Bag">
            <GiShoppingCart />

                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bag.length}</span>
            </Link>
        </div>
    </>
}

export default Searchbar