import { getImgSourceUrl } from './helper'
import { EMOJI_NAME, EMOJI_SIZE } from './options'
import Sprite from "./utils/Sprite";

class Element extends Sprite{
    constructor(name, { x, y }){
        super(getImgSourceUrl(name), EMOJI_SIZE, { x, y })
        this.index = EMOJI_NAME.indexOf(name);
    }

}

export default Element;