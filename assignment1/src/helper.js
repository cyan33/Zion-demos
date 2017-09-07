import { EMOJI_NAME, EMOJI_URL_SOURCE, EMOJI_COMBINATION } from './options'

export function getImgSourceUrl(name) {
    return EMOJI_URL_SOURCE[EMOJI_NAME.indexOf(name)];
}

export function getCombinationIndex(a, b) {
    return EMOJI_COMBINATION[a][b];
}
