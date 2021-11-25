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
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostsForCrop", () => {
    test("Calculate costs for a crop", () => {
        const corn = {
            name: "corn",
            costsPerPlant: 2,
            plantsPerCrop: 50
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
        };
        expect(getRevenueForCrop(apples)).toBe(180);
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
        };
        expect(getProfitForCrop(apples)).toBe(80);
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
        };
        const corn = {
            name: "corn",
            costsPerPlant: 1,
            plantsPerCrop: 50,
            priceKilo: 2,
            numKilos: 50,
        };
        const crops = [
            { crop: apples, numCrops: 5 }, // profit = 80
            { crop: corn, numCrops: 2 }, // profit = 50
        ];
        expect(getTotalProfit({ crops })).toBe(130);
    });
});