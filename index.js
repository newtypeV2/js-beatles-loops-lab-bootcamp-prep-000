// add solution here
var array = []

function theBeatlesPlay(musicians,instrument){
for(var i=0;i<musicians.length;i++){
  array.push(musicians[i] + "plays" + instrument[i])
  }
}

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

theBeatlesPlay(musicians,instruments)

for(var i=0;i<musicians.length;i++){
  console.log(array[i])
}