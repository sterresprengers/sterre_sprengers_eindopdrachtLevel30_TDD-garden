
const functions = {
    getYieldForPlant: plant => plant.yield ,
    getYieldForCrop: crops => crops.crop.yield * crops.numCrops ,
    getTotalYield: function(crops) {
        console.log("This is crops argument:", crops)
        const array = Array.from(crops);
        console.log("This is the array from crops:", array);
        array.forEach((crop) => 
            crop.crop.yield * crop.numCrops
        )
        .reduce((prevValue, curValue) => prevValue + curValue
        )} ,
}




// const getTotalYield = function(crops) {
//     Array.from(crops).forEach((crop) {
//         return crops.crop.yield * crops.numCrops
//     }).reduce((prevValue, curValue) => prevValue + curValue);
// }

// Array.from(crops).forEach((crop) {
//     return crops.crop.yield * crops.numCrops
// }).reduce((prevValue, curValue) => prevValue + curValue);


module.exports = functions;