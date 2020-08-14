
function highestAmpSeason(dt, ns) {
    let seasonLength = (dt.length / ns)
    let arrOfSeasons = chunkArray(dt, ns)
    
    //helper method to divide seasons
    function chunkArray(myArray, chunk_size){
        var index = 0;
        var arrayLength = myArray.length;
        var tempArray = [];
        
        for (index = 0; index < arrayLength; index += chunk_size) {
            myChunk = myArray.slice(index, index+chunk_size);
            // Do something if you want with the group
            tempArray.push(myChunk);
        }
    console.log(tempArray, "tempArray")
        return tempArray;
    }
  
  //checking to see if I got them split correctly
  console.log(arrOfSeasons,  "arrOfSeasons")
  
  //logic to get array of amplitudes
  let ampArray = []
   for (const element of arrOfSeasons) {
    let amplitude =  findAmplitude(element)
    ampArray.push(amplitude)
   }


  console.log("this is the ampArray", ampArray)
  
  //helper method to find highest and lowest value: returns amplitude
  function findAmplitude(season) {
      //console.log("find amp func found the max", Math.max(...season))
      //console.log("find amp func found the min", Math.min(...season))
    //console.log("this is the amplitude", (Math.max(...season) - Math.min(...season)))
    return (Math.max(...season) - Math.min(...season))
  }
  
  let result = ampArray.indexOf(Math.max(...ampArray))
  console.log("this is the result", result)
  //wanted to get fancy and return the answer with string interpolation, otherwise I would return "result"
  return `The index of the season with the highest Amplitude for temperate ranges is ${result}`
}

console.log(highestAmpSeason([-11, 10, -13, 12, 55, 23, -13, -16, 10], 3))