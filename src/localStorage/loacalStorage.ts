export const getItem = () => {
  let localData = localStorage.getItem("movieWatchList");
  if (localData) {
    //@ts-ignore
    return JSON.parse(localStorage.getItem("movieWatchList"));
  } else {
    return [];
  }
};

// remove item 

// export const removeItemList =(data)=>{
// if( getItem().length >= 1){
// const re = getItem().find((value)=>value.imdbId ===data.imdbId )

// }

// }

