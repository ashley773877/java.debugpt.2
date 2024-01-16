export const PI = 3.1415;
export const minimumspaceperplant = 0.8;

import { PI, minimumspaceperplant } from './constants.js';

export function calculateTotalArea(radius) {
    return PI * radius * radius;
}

export function calculateWeeklyGrowth(initialPlants, weeks) {
    return weeks * initialPlants;
}

export function calculateTotalSpaceRequired(weeklyGrowth) {
    return weeklyGrowth * minimumspaceperplant;
}

export function handleSpaceError(totalspaceRequired, gardenArea) {
    if (totalspaceRequired > gardenArea * 0.8) {
        throw new Error("Not enough space to accommodate the plants. Plants need to be destroyed.");
    } else if (totalspaceRequired >= 0.5 * gardenArea && totalspaceRequired <= 0.8 * gardenArea) {
        console.log("Growth is still being monitored");
    } else if (totalspaceRequired <= 0.5 * gardenArea) {
        console.log("We have room for more plants");
    }
}