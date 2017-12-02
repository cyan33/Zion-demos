export const COP_SRC = '';
export const ROBBER_SRC = '';
export const START_X = 0;
export const START_Y = 0;
export const MAX_PLAYERS = 4;
export const VELOCITY = {x: 0, y: 0};
export const ACCELERATION =  {x: 0, y: 0};
export const MAX_FORCE = 0.1;
export const MAX_SPEED = 2;
export const MAX_ACCELERATION = 3;
export const ROD = 50;
export const ROS = 2;
export const TIME_TO_TARGET = 0.8;
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
export const EXIT = 'EXIT'; // drawn identical to OPEN

export const TURN_NUMBER = 7;

// grid layout
export const GRID = [
    [WALL, WALL, WALL, WALL, EXIT, WALL, WALL, WALL, WALL],
    [WALL, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, WALL],
    [WALL, OPEN, WALL, WALL, OPEN, WALL, WALL, OPEN, WALL],
    [WALL, OPEN, WALL, OPEN, OPEN, OPEN, WALL, OPEN, WALL],
    [EXIT, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, EXIT],
    [WALL, OPEN, WALL, OPEN, OPEN, OPEN, WALL, OPEN, WALL],
    [WALL, OPEN, WALL, WALL, OPEN, WALL, WALL, OPEN, WALL],
    [WALL, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, OPEN, WALL],
    [WALL, WALL, WALL, WALL, EXIT, WALL, WALL, WALL, WALL]
];

export const SRC_WIDTH = CANVAS_WIDTH / GRID[0].length;
export const SRC_HEIGHT =CANVAS_HEIGHT / GRID.length;

// Grid info
export const GRID_INFO = [
    {
        gridPosition: {r: 0, c: 4},
        neighbors: [4]
    },
    {
        gridPosition: {r: 1, c: 1},
        neighbors: [2, 8]
    },
    {
        gridPosition: {r: 1, c: 2},
        neighbors: [1, 3]
    },
    {
        gridPosition: {r: 1, c: 3},
        neighbors: [2, 4]
    },
    {
        gridPosition: {r: 1, c: 4},
        neighbors: [0, 3, 5, 9]
    },
    {
        gridPosition: {r: 1, c: 5},
        neighbors: [4, 6]
    },
    {
        gridPosition: {r: 1, c: 6},
        neighbors: [5, 7]
    },
    {
        gridPosition: {r: 1, c: 7},
        neighbors: [6, 10]
    },
    {
        gridPosition: {r: 2, c: 1},
        neighbors: [1, 11]
    },
    {
        gridPosition: {r: 2, c: 4},
        neighbors: [4, 13]
    },
    {
        gridPosition: {r: 2, c: 7},
        neighbors: [7, 15]
    },
    {
        gridPosition: {r: 3, c: 1},
        neighbors: [8, 17]
    },
    {
        gridPosition: {r: 3, c: 3},
        neighbors: [13, 19]
    },
    {
        gridPosition: {r: 3, c: 4},
        neighbors: [9, 20]
    },
    {
        gridPosition: {r: 3, c: 5},
        neighbors: [13, 21]
    },
    {
        gridPosition: {r: 3, c: 7},
        neighbors: [10, 23]
    },
    {
        gridPosition: {r: 4, c: 0},
        neighbors: [17]
    },
    {
        gridPosition: {r: 4, c: 1},
        neighbors: [11, 16, 18, 25]
    },
    {
        gridPosition: {r: 4, c: 2},
        neighbors: [17, 19]
    },
    {
        gridPosition: {r: 4, c: 3},
        neighbors: [12, 18, 26, 20]
    },
    {
        gridPosition: {r: 4, c: 4},
        neighbors: [13, 19, 27, 21]
    },
    {
        gridPosition: {r: 4, c: 5},
        neighbors: [14, 20, 28, 22]
    },
    {
        gridPosition: {r: 4, c: 6},
        neighbors: [21, 23]
    },
    {
        gridPosition: {r: 4, c: 7},
        neighbors: [15, 22, 29, 24]
    },
    {
        gridPosition: {r: 4, c: 8},
        neighbors: [23]
    },
    
    {
        gridPosition: {r: 5, c: 1},
        neighbors: [17, 30]
    },
    {
        gridPosition: {r: 5, c: 3},
        neighbors: [19, 27]
    },
    {
        gridPosition: {r: 5, c: 4},
        neighbors: [20, 26, 31, 28]
    },
    {
        gridPosition: {r: 5, c: 5},
        neighbors: [21, 27]
    },
    {
        gridPosition: {r: 5, c: 7},
        neighbors: [23, 32]
    },
    {
        gridPosition: {r: 6, c: 1},
        neighbors: [25, 33]
    },
    {
        gridPosition: {r: 6, c: 4},
        neighbors: [27, 36]
    },
    {
        gridPosition: {r: 6, c: 7},
        neighbors: [29, 39]
    },
    {
        gridPosition: {r: 7, c: 1},
        neighbors: [30]
    },
    {
        gridPosition: {r: 7, c: 2},
        neighbors: [33, 35]
    },
    {
        gridPosition: {r: 7, c: 3},
        neighbors: [34, 36]
    },
    {
        gridPosition: {r: 7, c: 4},
        neighbors: [31, 35, 37, 40]
    },
    {
        gridPosition: {r: 7, c: 5},
        neighbors: [36, 38]
    },
    {
        gridPosition: {r: 7, c: 6},
        neighbors: [37, 39]
    },
    {
        gridPosition: {r: 7, c: 7},
        neighbors: [21, 27]
    },
    {
        gridPosition: {r: 8, c: 4},
        neighbors: [36]
    }
];