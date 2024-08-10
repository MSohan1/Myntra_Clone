import BagSummary from "../components/BagSummary";
import "../components/Bag.css";
import BagItemContainer from "../components/BagItemContainer";
import { useSelector } from "react-redux";

const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bagItems);
  // console.log(bagItems)

  // Filtering items based on bagItems
  const totalItems = items.filter((item) => bagItems.includes(item.id));

  // const totalItems = items.filter((item) => {
  //   const itemIndex = bagItems.indexOf(item.id);
  //   return itemIndex >= 0;
  // });


  return (
    <>
      <main>
        <div className="bag-page">
          {totalItems.map(item =>  <BagItemContainer key={item.id} item={item} /> )}
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
