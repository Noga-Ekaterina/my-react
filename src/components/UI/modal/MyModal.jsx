import React from 'react';
import cls from "./MyModal.module.css"

function MyModal({children, visible, setVisible}) {
   const clases=[cls.myModal]
   if (visible) {
      clases.push(cls.active)
   }
   return (  
      <div className={clases.join(" ")} onClick={setVisible}>
         <div className={cls.myModalContent} onClick={e=> e.stopPropagation()}>{children}</div>
      </div>
   );
}

export default MyModal;