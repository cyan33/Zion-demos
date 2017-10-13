import { getRandomNumber } from '../operations';
import Particle from './Particle'
/**
 * Class for handling particle systems. For now, simply allows management
 * of particles related to size, position, and movement. This will later
 * be extended to include varying distribution patterns (e.g. cone, cylinder, etc.)
 */
class ParticleSystem {
    constructor(){
        this.particles = [];
    }

    createUniformParticles(src, size, { x, y }, speed, numParts) {
        for(let i = 0; i < numParts; i++) {
            this.particles.push(new Particle(src, size, { x, y }, speed));
        }
    }

    createRandomizedParticles(src, size, max_hor, max_vert, max_speed, numParts) {
        for(let i = 0; i < numParts; i++) {
            let x = getRandomNumber(max_hor);
            let y =  getRandomNumber(max_vert);
            let speed = getRandomNumber(max_speed);
            this.particles.push(new Particle(src, size, { x, y }, speed));
        }
    }
}

export default ParticleSystem;