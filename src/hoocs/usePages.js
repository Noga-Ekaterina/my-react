import { useMemo } from "react";

const useArrPages = (totalPages)=>{
   const arrPages = useMemo(()=>{
      console.log('arr pagea');
      const arrPages = [];
      for (let i = 0; i < totalPages; i++) {
         arrPages.push(i+1)
      }
      return arrPages
   }, [totalPages]);
   return arrPages
};

export {useArrPages}