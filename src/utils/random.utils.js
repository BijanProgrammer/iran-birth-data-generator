import {STATES} from '../data/states.js';
import {HAIR_COLOR} from '../data/hair-color.js';
import {EYE_COLOR} from '../data/eye-color.js';
import {BLOOD_TYPE} from '../data/blood-type.js';

const MINIMUM_DATE = new Date(0);
const MAXIMUM_DATE = new Date(Date.now());

export function generateRandomDouble(options = {}) {
    const {minimumNumber = 0, maximumNumber = 100, precision = 2} = options;
    return +(Math.random() * (maximumNumber - minimumNumber) + minimumNumber).toFixed(precision);
}

export function generateRandomInteger(options = {}) {
    const {minimumNumber = 0, maximumNumber = 100} = options;
    return Math.floor(Math.random() * (maximumNumber - minimumNumber) + minimumNumber);
}

export function generateRandomBoolean(options = {}) {
    const {chanceOfSuccess = 0.5} = options;
    return Math.random() >= 1 - chanceOfSuccess;
}

export function generateRandomDate(options = {}) {
    const {minimumDate = MINIMUM_DATE, maximumDate = MAXIMUM_DATE} = options;

    const milliseconds = generateRandomInteger({
        minimumNumber: minimumDate.getTime(),
        maximumNumber: maximumDate.getTime(),
    });

    const date = new Date(milliseconds);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

export function generateRandomItem(items) {
    return items[generateRandomInteger({maximumNumber: items.length})];
}

export function generateRandomState() {
    return generateRandomItem(STATES);
}

export function generateRandomHairColor() {
    return generateRandomItem(HAIR_COLOR);
}

export function generateRandomEyeColor() {
    return generateRandomItem(EYE_COLOR);
}

export function generateRandomBloodType() {
    return generateRandomItem(BLOOD_TYPE);
}

export function generateRandomYesOrNo(options = {}) {
    return generateRandomBoolean(options) ? 'بله' : 'خیر';
}

export function generateRandomGender() {
    return generateRandomBoolean() ? 'پسر' : 'دختر';
}

export function generateRandomSurgeryType() {
    return generateRandomBoolean() ? 'طبیعی' : 'سزارین';
}
