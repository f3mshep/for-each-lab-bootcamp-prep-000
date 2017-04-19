function iterativeLog(array){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  sounds = ["moo", "rawr", "quack"]
  sounds.forEach((sound, index, sounds) => {
    callback(sounds)
  })
return sounds
}

function doToArray(array, callback){
  array.forEach((element, index, array)=>{
    callback(array)
  })
}
