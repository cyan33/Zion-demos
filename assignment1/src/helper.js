import { EMOJI_NAME, EMOJI_URL_SOURCE } from './options'

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
