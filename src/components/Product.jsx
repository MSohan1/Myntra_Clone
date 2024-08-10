import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bag";

const Product =({item})=>{

  const bagItems = useSelector(store =>store.bagItems)

  const dispatch = useDispatch()
  const handleAdd =() =>
  {
    dispatch(bagActions.addToCart(item.id))  
    
  }


    return <>
    <div className="item-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="rating">
              {item.rating.stars} | {item.rating.count}
            </div>
            <div className="company-name">Company Name : {item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Current Price : Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                ({item.discount_percentage}% OFF)
              </span>
            </div>
            <button className="btn-add-bag" onClick={handleAdd}>
              Add to Bag
            </button>
          </div>
    </>
}


export default Product;