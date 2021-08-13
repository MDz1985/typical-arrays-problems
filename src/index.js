
exports.min = function min (array) {
  let min = 1000000;

  if (array === undefined) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  for (let i = 0 ; i < array.length; i++){
    if (min > array[i]){
      min = array[i];
    }
  }
  return min;

}

exports.max = function max (array) {
  let max =-100000;
  if (array === undefined) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  for (let i = 0 ; i < array.length; i++){
    if (max < array[i]){
      max = array[i];
    }
  }
  return max;

}

exports.avg = function avg (array) {
  let sum=0;
  if (array === undefined) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  }
  for (let i = 0 ; i < array.length; i++){
    
      sum += array[i];
  }
  
  return sum/array.length;

}

