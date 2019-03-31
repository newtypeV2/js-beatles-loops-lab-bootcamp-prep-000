// add solution here
var array = []

function theBeatlesPlay(musicians,instrument){
for(var i=0;i<musicians.length;i++){
  array.push(musicians[i] + " plays " + instrument[i])
  }
return array
}

for(var i=0;i<musicians.length;i++){
  console.log(array[i])
}