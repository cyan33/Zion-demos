import { EMOJI_NAME, EMOJI_URL_SOURCE, EMOJI_COMBINATION } from './options'

export function getImgSourceUrl(name) {
    return EMOJI_URL_SOURCE[EMOJI_NAME.indexOf(name)];
}


export function getBoundaries(pos, size) {
    const { x, y } = pos;
    const { width, height } = size;

    return {
        top: y,
        left: x,
        bottom: y + height,
        right: x + width,
    }
}

export function getCombinationIndex(a, b) {
    return EMOJI_COMBINATION[a][b];
}

export function removeMultiElementFromArray(arr, ...indexes) {
    indexes.sort((a, b) => b - a);  // decendent

    for (let i = 0; i< indexes.length; i++) {
        arr.splice(indexes[i], 1);
    }

    return arr;
}
