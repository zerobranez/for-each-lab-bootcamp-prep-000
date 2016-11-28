function iterativeLog(array) {
  array.forEach( (x,index) => console.log(`${index}: ${x}`))
}

function iterate(callback) {
  var array = ['cavs', 'madrid', 'saints', 'yankees']
  array.forEach(callback)
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
}
