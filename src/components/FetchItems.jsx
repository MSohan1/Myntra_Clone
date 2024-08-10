import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemSliceAction } from "../store/Server";
import { FetchStatusSliceAction } from "../store/Data_From_Server";


const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetch);
//   console.log(fetchStatus);
  
  

   const dispatch = useDispatch();
       useEffect(() => {
        if(fetchStatus.fetchDone)  return ;

           const controller = new AbortController();
           const signal = controller.signal;
           
           dispatch(FetchStatusSliceAction.makeFetchingStarted())
           fetch("http://localhost:8080/items", { signal })
               .then((res) => res.json())
               .then(({items}) => {
                    dispatch(FetchStatusSliceAction.makeFetchDone())
                    dispatch(FetchStatusSliceAction.makeFetchingEnded())
                   dispatch(ItemSliceAction.addInitialData(items))
               })
               .catch((err) => {
                   if (err.name === 'AbortError') {
                    //    console.log('Fetch aborted');
                   } else {
                       console.error('Fetch error:', err);
                   }
               });
           
           return () => {
               controller.abort();
           };
       }, [fetchStatus]);
   

  return <></>;
};

export default FetchItems;
