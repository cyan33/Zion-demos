// drag and drop utils handlers
import { coordinateConversion } from './canvas'
import { getBoundaries } from '../helper'
import { EMOJI_SIZE } from '../options'

/*
    drag and drop in canvas is much different than in DOM, because the canvas comes
    as a whole, so these functions may seem to be hacky, or dirty.
*/
export default function dndWrapper(canvas, context) {
    let isMouseDown = false;

    let getItemPosition = (item) => {
        const { x, y } = item.position;
        return { x, y };
    }
    
    let getMousePosition = (mouseX, mouseY) => {
        const { x, y } = coordinateConversion(canvas, mouseX, mouseY);
        return { x, y };
    }

    let getDraggingItemIndex = (items, x, y) => {
        for (let i = 0; i < items.length; i++) {
            let currItem = items[i];
            let {
                top,
                left,
                right,
                bottom
            } = getBoundaries(currItem.position, EMOJI_SIZE);

            if (x < right && x > left && y < bottom && y > top) {
                return i;
            }
        }
        return -1;
    };

    let onMouseDownHandler = (items, i, ) => {
        // get the current position of items[i]
        const { x, y } = getPosition(items[i]);
        isMouseDown = true;
    };

    let onMouseMoveHandler = (e) => {

        updateItemPosition(items, i, )
    };

    let onMouseUpHandler = () => {
        this.onMouseMove = null;
    };

    let isCollapsed = () => {

    };
    
    return {
        onMouseDownHandler,
        onMouseMoveHandler,
        isCollapsed,
        getDraggingItemIndex,
    };
};
