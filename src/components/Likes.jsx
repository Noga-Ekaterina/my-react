import React, { useState } from 'react';

function Likes() {
   const [likes, setLikes] = useState(0);
   const [value, setValue] = useState("text");
   const likeUp = ()=>{
      setLikes(likes+1)
   };
   const likeDuwn = ()=>{
      setLikes(likes-1)
   };
   return (
      <div className="App">
         <h1>{likes}</h1>
         <h1>{value}</h1>
         <input value={value} onInput={(event)=>{setValue(event.target.value)}} />
         <button onClick={likeUp}>like</button>
         <button onClick={likeDuwn}>no</button>
      </div>
   );
}

export default Likes;