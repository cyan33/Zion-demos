
import { getImgSourceUrl } from './helper'
import { EMOJI_NAME, EMOJI_SIZE } from './options'
import Sprite from "./utils/Sprite";

function Element (name, { x, y }){
    Sprite.call(this, getImgSourceUrl(name), EMOJI_SIZE, { x, y })
    this.index = EMOJI_NAME.indexOf(name);
}

Element.prototype = Object.create(Sprite.prototype);
Element.prototype.constructor = Element;
export default Element;