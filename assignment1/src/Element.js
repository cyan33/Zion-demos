import { getImgSourceUrl } from './helper'
import { EMOJI_NAME } from './options'

class Element {
    constructor(name, { x, y }) {
        this.index = EMOJI_NAME.indexOf(name);
        this.src = getImgSourceUrl(name);
        this.position = { x, y };
    }
}

export default Element;