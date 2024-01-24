import { useState } from "react";

function useFetch(callback) {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");

   const fetching = async ()=>{
      try {
         setLoading(true)
         await callback()
      } catch (e) {
         setError(e.message)
      }
      finally{
         setLoading(false)
      }
   };

   return ( [fetching, loading, error] );
}

export default useFetch;