 const cleanPractice = (array) =>
  array.reduce(function (arr, cv) {
    if (!arr.some((element) => element.scale === cv.scale)) {
      arr.push(cv);
    }
    return arr;
  }, []).sort((a, b) => a - b);

export { cleanPractice }