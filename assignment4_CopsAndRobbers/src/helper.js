import getRandomNumber from './engine/operations'
import {MAX_PLAYERS, CANVAS_WIDTH, CANVAS_HEIGHT} from './options'

/**
 * Purely for testing purposes. This will be updated
 * with the real spawn locations once the map is created.
 */
export function initSpawnLocations() {
    let locations = [];
    while(locations.length != MAX_PLAYERS) {
        // get a random x, y location
        let spawnX = getRandomNumber(CANVAS_WIDTH);
        let spawnY = getRandomNumber(CANVAS_HEIGHT);
        let valid = true;
        for(let i = 0; i < locations.length; i++) {
            let spawn = locations[i];
            if(spawn.x === spawnX && spawn.y === spawnY) valid = false
        }
        // Only add the new spawn if we are valid
        if(valid) {
            locations.push({x: spawnX, y: spawnY, occupied: false});
        }
    }

    return locations;
}

export function getSpawnLocation(spawnLocations) {
    let index = 0;
    let found = false;
    while(!found) {
        index = getRandomNumber(spawnLocations.length);
        if(!spawnLocations[index].occupied) found = true;
    }
    return index;
}