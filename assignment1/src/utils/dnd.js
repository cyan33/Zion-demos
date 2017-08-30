// drag and drop utils handlers
import { coordinateConversion } from './canvas'

/*
    drag and drop in canvas is much different than in DOM, because the canvas comes
    as a whole, so these functions may seem to be hacky, or dirty.
*/
export const dndWrapper = function(canvas, context) {
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
            if (x < currItem.position.x + currItem.width
                && x > currItem.position.x
                && y < currItem.position.y + currItem.height
                && y > currItem.position.y) {
                    return i;
                }
        }
        return -1;
    };

    let onMouseDownHandler = (items, i, ) => {
        // get the current position of items[i]
        const { x, y } = getPosition(items[i]);
        isMouseDown = true;
        this.
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
        onMouseMoveHandle,
        isCollapsed,
    };
};
