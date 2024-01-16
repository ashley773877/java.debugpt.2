import { calculateTotalArea, calculateWeeklyGrowth, calculateTotalSpaceRequired, handleSpaceError } from './calculateArea.js';
import { calculateGardenExpansion } from './gardenExpansion.js';

try {
    const radius = 5;
    const initialPlants = 20;
    const weeks = 10;

    const gardenArea = calculateTotalArea(radius);
    const weeklyGrowth = calculateWeeklyGrowth(initialPlants, weeks);
    const totalSpaceRequired = calculateTotalSpaceRequired(weeklyGrowth);