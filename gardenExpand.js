import { PI, minimumspaceperplant } from './constants.js';

export function calculateGardenExpansion(initialPlants, weeks) {
    let cumulativeArea = 0;
    let currentPlants = initialPlants;

    for (let week = 1; week <= weeks; week++) {
        const areaRequired = currentPlants * minimumspaceperplant;
        cumulativeArea += areaRequired;

        currentPlants *= 2;
    }

    const expandedRadius = Math.sqrt(cumulativeArea / PI);
    const additionalSpace = (100 * minimumspaceperplant) - cumulativeArea;

    return { cumulativeArea, expandedRadius, additionalSpace };
}