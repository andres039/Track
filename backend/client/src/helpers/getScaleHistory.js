/*
Create a function that iterates over the array of objects and find the ones repeated, creating a new array that contains objects with BPM and DATE of every object. 
*/
const getScaleHistory = (arr, currentScale) => {
  return arr.reduce((acc, cv) => {
    if (cv.scale === currentScale) {
      acc.push({'bpm': cv.bpm, 'date': cv.createdAt})
    }
    return acc
  }, [])
}

export default getScaleHistory