const functions = {
    getYieldForPlant: (plant, factor) => {
        let sunFactor;
        if (factor.sun === "low") {
            sunFactor = 100 + plant.factor.sun.low
        } else if (factor.sun === "medium") {
            sunFactor = 100 + plant.factor.sun.medium;
        } else if (factor.sun === "high") {
            sunFactor = 100 + plant.factor.sun.high;
        };
        let windFactor;
        if (factor.wind === "low") {
            windFactor = 100 + plant.factor.wind.low;
        } else if (factor.wind === "medium") {
            windFactor = 100 + plant.factor.wind.medium;
        } else if (factor.wind === "high") {
            windFactor = 100 + plant.factor.wind.high;
        };
        return plant.yield * sunFactor/100 * windFactor/100;
    },

    getYieldForCrop: (crop, factor) => {
        let sunFactor;
        if (factor.sun === "low") {
            sunFactor = 100 + crop.crop.factor.sun.low
        } else if (factor.sun === "medium") {
            sunFactor = 100 + crop.crop.factor.sun.medium;
        } else if (factor.sun === "high") {
            sunFactor = 100 + crop.crop.factor.sun.high;
        };
        let windFactor;
        if (factor.wind === "low") {
            windFactor = 100 + crop.crop.factor.wind.low;
        } else if (factor.wind === "medium") {
            windFactor = 100 + crop.crop.factor.wind.medium;
        } else if (factor.wind === "high") {
            windFactor = 100 + crop.crop.factor.wind.high;
        };
        const cropYield = crop.crop.yield * crop.numCrops
        return cropYield * sunFactor/100 * windFactor/100;
    },
    getTotalYield: (crops, factors) => {
        const sunFactor = factors.environmentFactors.sun; 
        const windFactor = factors.environmentFactors.wind; 
        const totalYield = crops.crops.map(crop => {
            let sunForCrop;
            if (sunFactor === "low") {
                sunForCrop = 100 + crop.crop.factor.sun.low
            } else if (sunFactor === "medium") {
                sunForCrop = 100 + crop.crop.factor.sun.medium;
            } else if (sunFactor === "high") {
                sunFactor = 100 + crop.crop.factor.sun.high;
            };
            let windForCrop;
            if (windFactor === "low") {
                windForCrop = 100 + crop.crop.factor.wind.low;
            } else if (windFactor === "medium") {
                windForCrop = 100 + crop.crop.factor.wind.medium;
            } else if (windFactor === "high") {
                windForCrop = 100 + crop.crop.factor.wind.high;
            };
            const yieldNoFactor = crop.crop.yield * crop.numCrops;
            const yieldWithFactor = yieldNoFactor * sunForCrop/100 * windForCrop/100;
            return yieldWithFactor;
        }).reduce((prevNum, currentNum) => prevNum + currentNum);
        return totalYield;      
    },

    getCostsForCrop: crop => crop.costsPerPlant * crop.plantsPerCrop ,

    getRevenueForCrop: (crop, factor) => { 
        let sunFactor;
        if (factor.sun === "low") {
            sunFactor = 100 + crop.factor.sun.low
        } else if (factor.sun === "medium") {
            sunFactor = 100 + crop.factor.sun.medium;
        } else if (factor.sun === "high") {
            sunFactor = 100 + crop.factor.sun.high;
        };
        let windFactor;
        if (factor.wind === "low") {
            windFactor = 100 + crop.factor.wind.low;
        } else if (factor.wind === "medium") {
            windFactor = 100 + crop.factor.wind.medium;
        } else if (factor.wind === "high") {
            windFactor = 100 + crop.factor.wind.high;
        };
        const revenueForCrop = crop.priceKilo * crop.numKilos
        return revenueForCrop * sunFactor/100 * windFactor/100;
    },

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
