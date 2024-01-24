import React from 'react';

function ComentItem({coment}) {
   return ( 
      <div>
         <h4>{coment.name}</h4>
         <strong>{coment.email}</strong>
         <div>{coment.body}</div>
      </div>
   );
}

export default ComentItem;