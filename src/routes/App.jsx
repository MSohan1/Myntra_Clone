import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Headder from "../components/Headder";
import FetchItems from "../components/FetchItems";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";


function App() {

  const fetchStatus = useSelector((store) => store.fetch);
  // console.log(fetchStatus.fetchDone);
  
  return (
    <>
      <Headder />
      <FetchItems/>
      {fetchStatus.currentlyFetching ? <Spinner /> : <Outlet />}
      <Footer />
    </>
  );
}


export default App;
