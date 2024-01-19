import React from 'react';
import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';
function SortPost({filters, setFilters}) {
   return (  
      <div>
         <MyInput 
            value={filters.qvery}
            onChange={(e)=> setFilters({...filters, qvery: e.target.value})}
            placeholder="Поиск"/>

         <MySelect
            value={filters.sort}
            onChange={(e)=> setFilters({...filters, sort: e})}
            defaultValue="Сортировать по"
            options={[
               {value: "title", name: "По названию"},
               {value: "body", name: "По описанию"}
            ]}
         />
      </div>
   );
}

export default SortPost;