export function generateCsvContent(headersEnglishNameToPersianName, data) {
    const headersEnglishName = Object.keys(headersEnglishNameToPersianName);

    const headersRow = headersEnglishName.map((englishName) => headersEnglishNameToPersianName[englishName]).join(',');
    const dataRows = data.map((row) => headersEnglishName.map((englishName) => row[englishName]).join(','));

    return [headersRow, ...dataRows].join('\n');
}
