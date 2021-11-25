const functions = {
    getYieldForPlant: (plant, factor) => {
        let sunFactor;
        if (factor.sun = "low") {
            sunFactor = 100 + plant.factor.sun.low
        } else if (factor.sun = "medium") {
            sunFactor = 100 + plant.factor.sun.medium;
        } else if (factor.sun = "high") {
            sunFactor = 100 + plant.factor.sun.high;
        };
        let windFactor;
        if (factor.wind = "low") {
            windFactor = 100 + plant.factor.wind.low;
        } else if (factor.wind = "medium") {
            windFactor = 100 + plant.factor.wind.medium;
        } else if (factor.wind = "high") {
            windFactor = 100 + plant.factor.wind.high;
        };
        return plant.yield * sunFactor/100 * windFactor/100;
    },

    getYieldForCrop: crop => crop.crop.yield * crop.numCrops ,

    getTotalYield: crops => {
        // console.log("This is crops in getTotalYield", crops)
        const totalYield = crops.crops.map(crop => {
            return crop.crop.yield * crop.numCrops;
            }).reduce((prevNum, currentNum) => prevNum + currentNum);
        return totalYield;
    },

    getCostsForCrop: crop => crop.costsPerPlant * crop.plantsPerCrop ,

    getRevenueForCrop: crop => crop.priceKilo * crop.numKilos ,

    getProfitForCrop: crop => {
        const revenue = crop.priceKilo * crop.numKilos;
        const costs = crop.costsPerPlant * crop.plantsPerCrop;
        return revenue - costs;
    },

    getTotalProfit: crops => {
        // console.log("This is crops in getTotalProfit", crops)
        const totalProfit = crops.crops.map(crop => {
            const revenue = crop.crop.priceKilo * crop.crop.numKilos;
            const costs = crop.crop.costsPerPlant * crop.crop.plantsPerCrop;
            return revenue - costs;
        }).reduce((prevNum, currentNum) => prevNum + currentNum);
        return totalProfit;
    },
}
module.exports = functions;
