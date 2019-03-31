// add solution here
var array = []

function theBeatlesPlay(musicians,instrument){
for(var i=0;i<musicians.length;i++){
  array.push(musicians[i] + " plays " + instrument[i])
  }
return array
}

function johnLennonFacts(factArray){
  var count = 0
  while(count<factArray.length){
    factArray[count]=factArray[count]+"!!!";
    ++count;
  }
return factArray
}


//testing purposes
for(var i=0;i<musicians.length;i++){
  console.log(array[i])
}