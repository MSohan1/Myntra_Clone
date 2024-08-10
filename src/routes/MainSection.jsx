import Product from "../components/Product";
import {useSelector} from "react-redux";

const MainSection = () => {
  const items = useSelector(store => store.items)

  
  return (
      <main>
        <div className="items-container">
          {items.map(item=>  <Product key={item.id} item={item}></Product> )}
          
        </div>
      </main>
  );
};

export default MainSection;
