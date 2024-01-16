import { calculateTotalArea, calculateWeeklyGrowth, calculateTotalSpaceRequired, handleSpaceError } from './calculateArea.js';
import { calculateGardenExpansion } from './gardenExpansion.js';

try {
    const radius = 5;
    const initialPlants = 20;
    const weeks = 10;

    const gardenArea = calculateTotalArea(radius);
    const weeklyGrowth = calculateWeeklyGrowth(initialPlants, weeks);
    const totalSpaceRequired = calculateTotalSpaceRequired(weeklyGrowth);

    handleSpaceError(totalSpaceRequired, gardenArea);

    const { cumulativeArea, expandedRadius, additionalSpace } = calculateGardenExpansion(initialPlants, weeks);

    console.log(`Total cumulative area required after ${weeks} weeks: ${cumulativeArea.toFixed(2)} square meters`);
    console.log(`Radius of the expanded garden: ${expandedRadius.toFixed(2)} meters`);
    console.log(`Additional space required for 100 plants: ${additionalSpace.toFixed(2)} square meters`);
} catch (error) {
    console.error(error.message);
} 