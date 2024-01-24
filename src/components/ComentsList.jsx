import React from 'react';
import ComentItem from './ComentItem';

function ComentsList({coments}) {
   return (  
      <div>
         {
            coments.map((coment)=>
               <ComentItem coment={coment} key={coment.id}/>
            )
         }
      </div>
   );
}

export default ComentsList;