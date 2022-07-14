export const snakeCaseToText = (str: string): string => {
    const splitedString = str.split('_');
    if (!splitedString.length) return '';
    splitedString[0] = splitedString[0].charAt(0).toUpperCase() + splitedString[0].slice(1);
    return splitedString.join(' ');
}