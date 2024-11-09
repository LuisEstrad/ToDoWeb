import React from 'react';
import './TodoSearch.css';
import { Context } from '../../context';


function TodoSearch(){
        const { 
          searchValue,
          setSearchValue,
         } = React.useContext(Context);
    
    return(
        <input placeholder="Search a task" 
        className='TodoSearch'
        value={searchValue}
        onChange={(event) => { setSearchValue(event.target.value);}}
        />
    );
}

export {TodoSearch};