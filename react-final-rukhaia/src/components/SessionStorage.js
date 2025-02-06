export const setSessionStorageItem = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };
  
  export const getSessionStorageItem = (key) => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };