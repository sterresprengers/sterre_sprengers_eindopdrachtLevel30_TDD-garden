
const functions = {
    getYieldForPlant: plant => plant.yield ,
    getYieldForCrop: crop => crop.crop.yield * crop.numCrops ,
    getTotalYield: crops => {
        const totalYield = crops.crops.map(crop => {
            return crop.crop.yield * crop.numCrops;
            }).reduce((prev, cur) => prev + cur);
        return totalYield;
    },
}
module.exports = functions;
