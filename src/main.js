import fs from 'fs/promises';

import {
    generateRandomBloodType,
    generateRandomBoolean,
    generateRandomDate,
    generateRandomDouble,
    generateRandomEyeColor,
    generateRandomGender,
    generateRandomHairColor,
    generateRandomInteger,
    generateRandomState,
    generateRandomSurgeryType,
} from './utils/random.utils.js';
import {generateCsvContent} from './utils/csv.utils.js';
import {HEADERS_ENGLISH_NAME_TO_PERSIAN_NAME} from './data/headers-english-name-to-persian-name.js';

const OUTPUT_PATH = 'output/iran-birth-data.csv';
const ROWS_COUNT = 2342;

const generateRandomData = () => {
    return Array.from({length: ROWS_COUNT}, (_, i) => ({
        id: i + 1,
        state: generateRandomState(),
        dateOfBirth: generateRandomDate(),
        gender: generateRandomGender(),
        weight: generateRandomDouble({minimumNumber: 2.5, maximumNumber: 4}),
        pregnancyMonth: generateRandomInteger({minimumNumber: 6, maximumNumber: 11}),
        surgeryType: generateRandomSurgeryType(),
        hairColor: generateRandomHairColor(),
        eyeColor: generateRandomEyeColor(),
        bloodType: generateRandomBloodType(),
        isBabyDead: generateRandomBoolean({chanceOfSuccess: 0.01}),
        isMotherDead: generateRandomBoolean({chanceOfSuccess: 0.02}),
        hasDisability: generateRandomBoolean({chanceOfSuccess: 0.03}),
        doesNeedIntensiveCare: generateRandomBoolean({chanceOfSuccess: 0.05}),
        isInsured: generateRandomBoolean({chanceOfSuccess: 0.9}),
    }));
};

const exportData = async (data) => {
    await fs.writeFile(OUTPUT_PATH, generateCsvContent(HEADERS_ENGLISH_NAME_TO_PERSIAN_NAME, data));
};

const main = async () => {
    const data = generateRandomData();
    await exportData(data);
};

main().then(() => console.log('Done!'));
