export const getCoords = (arr: string[]) => {
  let newArray: Array<string> = [];

  for (let i = 0; i < arr.length; i++) {
    let str: any;
    str = arr[i].slice(1, 3);

    newArray.push(str);
  }

  console.log("new arr", newArray);

  return newArray;
};
