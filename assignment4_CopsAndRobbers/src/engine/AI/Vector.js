import { getDistance } from '../operations'

export default function Vector() {
    let add = (v1, v2) => {
        return {x: v1.x + v2.x, y: v1.y + v2.y};
    };

    let sub  = (v1, v2) => {
        return {x: v1.x - v2.x, y: v1.y - v2.y};
    };

    let mult = (v, factor) => {
        return {x:v.x * factor, y:v.y * factor};
    };

    let limit = (v, factor) => {
        return {x:v.x / factor, y:v.y / factor};
    };

    let normalize = (v) => {
        let mag = Vector.mag(v)
        return {x: v.x / mag, y: v.y / mag};
    };

    let mag = (v) => {
        return Math.sqrt((v.x * v.x) + (v.y * v.y));
    };
    
    let dist = (v1, v2) => {
        return getDistance(v1.x, v1.y, v2.x, v2.y);
    };

    return { add, sub, mult, limit, normalize, mag, dist };
}