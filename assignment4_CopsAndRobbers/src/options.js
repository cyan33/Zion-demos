// canvas parameters
export const CANVAS_HEIGHT = 600;
export const CANVAS_WIDTH = 600;

// keycodes
export const LEFT = 37;
export const UP = 38;
export const RIGHT = 39;
export const DOWN = 40;

// tile numbers
export const OPEN = 'OPEN';
export const WALL = 'WALL';
export const COP = 'COP';
export const ROBBER = 'ROBBER';

export const TURN_NUMBER = 7;

// grid layout
export const GRID = [
    [WALL, WALL, WALL, WALL, WALL, WALL, WALL],
    [WALL, COP, OPEN, OPEN, OPEN, OPEN, WALL],
    [WALL, WALL, WALL, OPEN, WALL, OPEN, WALL],
    [WALL, OPEN, OPEN, OPEN, WALL, ROBBER, WALL],
    [WALL, OPEN, WALL, OPEN, WALL, WALL, WALL],
    [WALL, OPEN, WALL, ROBBER, OPEN, OPEN, WALL],
    [WALL, WALL, WALL, WALL, OPEN, OPEN, WALL]
];