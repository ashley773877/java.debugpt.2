import { PI, minimumspaceperplant } from './constants.js';

export function calculateGardenExpansion(initialPlants, weeks) {
    let cumulativeArea = 0;
    let currentPlants = initialPlants;

