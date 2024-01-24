import React from 'react';
import MyButton from './UI/button/MyButton';
import { useArrPages } from '../hoocs/usePages';

function ButtonsPages({totalPages, page, setPage}) {
   const arrPages=useArrPages(totalPages);
   return (  
      <div className="buttonsPages">
         {
            arrPages.map(p =>
               <MyButton 
                  key={p}
                  onClick={()=> setPage(p)}
               >
                  {p}
               </MyButton>
            )
         }
      </div>
   );
}

export default ButtonsPages;