export const getItem = () => {
  let localData = localStorage.getItem("movieWatchList");
  if (localData) {
    //@ts-ignore
    return JSON.parse(localStorage.getItem("movieWatchList"));
  } else {
    return [];
  }
};
