const {
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostsForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: 20,
                medium: 0,
                high: -20, 
            },
        },
    };
    const environmentFactors = {
        sun: "medium",
        wind: "medium",
    };
    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 4,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 20,
                    medium: 0,
                    high: -20, 
                },
            },

        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "high",
            wind: "high",
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(48);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 4,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: 20,
                    medium: 0,
                    high: -20, 
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 5,
            factor: {
                sun: {
                    low: -30,
                    medium: 0,
                    high: 60,
                },
                wind: {
                    low: 30,
                    medium: 0,
                    high: -40, 
                },
            },
        };
        const crops = [
            { crop: corn, numCrops: 5 }, 
            { crop: pumpkin, numCrops: 2 }, 
        ];
        const environmentFactors = { 
            sun: "low", 
            wind: "high",
        };
        expect(getTotalYield({ crops }, { environmentFactors })).toBe(12.2); // >> curly brackets needed? 
    });
});

describe("getCostsForCrop", () => {
    test("Calculate costs for a crop", () => {
        const corn = {
            name: "corn",
            costsPerPlant: 2,
            plantsPerCrop: 50,
        };
        expect(getCostsForCrop(corn)).toBe(100);
    });
});

describe("getRevenueForCrop", () => {
    test("Calculate revenue for a crop", () => {
        const apples = {
            name: "apples",
            priceKilo: 3,
            numKilos: 60,
            factor: {
                sun: {
                    low: -30,
                    medium: 0,
                    high: 60,
                },
                wind: {
                    low: 30,
                    medium: 0,
                    high: -40, 
                },
            },
        };
        const environmentFactors = { 
            sun: "medium", 
            wind: "low",
        };
        expect(getRevenueForCrop(apples, environmentFactors)).toBe(234);
    });
});

describe("getProfitForCrop", () => {
    test("Calculate profit for a crop", () => {
        const apples = {
            name: "apples",
            costsPerPlant: 2,
            plantsPerCrop: 50,
            priceKilo: 3,
            numKilos: 60,
            factor: {
                sun: {
                    low: -30,
                    medium: 0,
                    high: 60,
                },
                wind: {
                    low: 30,
                    medium: 0,
                    high: -40, 
                },
            },
        };
        const environmentFactors = { 
            sun: "high", 
            wind: "medium",
        };
        expect(getProfitForCrop(apples, environmentFactors)).toBe(188); 
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit of multiple crops", () => {
        const apples = {
            name: "apples",
            costsPerPlant: 2,
            plantsPerCrop: 50,
            priceKilo: 3,
            numKilos: 60,
            factor: {
                sun: {
                    low: -30,
                    medium: 0,
                    high: 60,
                },
                wind: {
                    low: 30,
                    medium: 0,
                    high: -40, 
                },
            },
        };
        const corn = {
            name: "corn",
            costsPerPlant: 1,
            plantsPerCrop: 50,
            priceKilo: 2,
            numKilos: 50,
            factor: {
                sun: {
                    low: -20,
                    medium: 0,
                    high: 70,
                },
                wind: {
                    low: 50,
                    medium: 0,
                    high: -30, 
                },
            },
        };
        const crops = [
            { crop: apples }, 
            { crop: corn }, 
        ];
        const environmentFactors = { 
            sun: "high", 
            wind: "high",
        };
        expect(getTotalProfit({ crops }, { environmentFactors })).toBe(141.8);
    });
});