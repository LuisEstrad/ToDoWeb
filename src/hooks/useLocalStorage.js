import React from 'react';

//LocalStorage
function useLocalStorage(itemName, initialValue) {

  // State of the items to persist 
  const [item, setItem] = React.useState(initialValue);
  
  // State of loading the page
  const [loading, setLoading] = React.useState(true);

  // State of error in case something bad happens
  const [error, setError] = React.useState(false);

  // Effect to see if there is anything on local storage
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
      
        let parsedItem;
    
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
    
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setError(true);
    }
  };
  
  return { item, saveItem, loading, error };
}

export { useLocalStorage };
