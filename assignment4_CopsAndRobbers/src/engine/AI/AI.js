import Sprite from '../Sprite'
/** distance between a boundary and this AI to ensure obstacle avoidance  */
const BOUNDS_OFFSET = 30;
/** target proximity to halt path following */
const TARGET_PROX = 5;

// *Note: all vector related methods will need to be updated
class AI extends Sprite {
    constructor (pos, vel, accel, maxForce, maxSpeed) {
        this.random = new Random(); // random variable for setting new targets
        this.position = pos; // position
        this.initPosition = pos; // initial position
        this.velocity = vel; // velocity
        this.acceleration = accel; // acceleration
        this.maxForce = maxForce; // max steering force
        this.maxSpeed = maxSpeed; // max speed
        this.initMaxSpeed = maxSpeed; // initial max speed
        this.currentNode = 0; // current node
        this.maxAcceleration = 8; // max acceleration
        this.rod = 50; // radius of deceleration at which to slow down
        this.ros = 3; // radius of satisfaction in which to arrive at target
        this.timeToTarget = 0.8; // Holds the time over which to achieve target speed
        this.followingTarget = false; // are we currently following something?
    }
    
    /**
     * Updates AI parameters.
     */
    update() {
        throw new Error('update() must be implemented');
    }
    /**
     * Displays the AI to the screen.
     */
    display() {
        throw new Error('display() must be implemented');
    }
    
    /**
     * Performs necessary parameter updates for this AI
     */
    run() {
       throw new Error('run() must be implemented');
    }

    /**
     * Orients the player in the direction of the target
     * @param des desired velocity vector to orient
     * @return the steering vector to orient the player
     */
    getOrientation(des){
        return PVector.sub(des, vel);
    }
    
    /**
     * Applies a force in the direction of the given vector
     * @param f the force to apply
     */
    applyForce(f){
        accel.add(f);
    }
    
    /**
     * Seek algorithm for moving character to a target location
     * Algorithm adapted from Daniel Shiffman's "The Nature of Code"
     * @param t the target to seek
     */
    seek(t){
        // Get the desired velocity vector
        let des = PVector.sub(t, pos);
        // Scale to max speed
        des.normalize();
        des.mult(maxSpeed);
        // Get the steering vector
        let steer = this.getOrientation(des);
        steer.limit(maxForce);
        // Apply steering force
        this.applyForce(steer);
    }
    
    /**
     * Arrive algorithm for directing character away from a target
     * Algorithm modified and adapted from Daniel Shiffman's "The Nature of Code"
     * @param t the target from which to flee
     */
    flee(t){
        // Get the desired velocity vector away from the target
        let des = PVector.sub(pos, t);
        // Scale to max speed
        des.normalize();
        des.mult(maxSpeed);
        // Get the steering vector
        let steer = this.getOrientation(des);
        steer.limit(maxForce);
        // Apply steering force
        this.applyForce(steer);
    }
    
    /**
     * Arrive algorithm. Adapted from "Artificial Intelligence for Games"
     * @param t the target at which to arrive
     */
    arrive(t){
        // Get direction target
        let dir = PVector.sub(t, pos);
        let targetSpeed = 0;
        // Get distance to target
        let dist = dir.mag();
        // If at target, do nothing
        if(dist < ros){
            // Stop within ros
            let stop = new PVector(-vel.x/2, -vel.y/2);
            this.applyForce(stop); // want to cancel
            return;
        }
        // If we're outside deceleration radius, go maxSpeed
        if(dist > rod){
            targetSpeed = maxSpeed;
        }else{
            // Otherwise, calculate scaled speed
            targetSpeed = maxSpeed * dist / rod;
        }
        // Get target velocity (combines speed and direction)
        dir.normalize();
        dir.mult(targetSpeed);
        let steer = this.getOrientation(dir);
        // Need to slow down (added)
        steer.div(timeToTarget);
        //Check if acceleration is too fast
        if(steer.mag() > maxAccel){
            steer.normalize();
            steer.mult(maxAccel);
        }
        // Limit force
        steer.limit(maxForce);
        // Apply steering force
        this.applyForce(steer);
    }
    
    /**
     * Generates the lowest cost path to the next target to follow
     * @param t the target in which to find the path
     * @param g graph of the room (GraphGenerator class)
     * @param aStar provides A* pathfinding (AStar class)
     * @return the lowest cost path to the given target
     */
    findNextTarget(t, g, aStar){
        // Find nearest target and character positions on the graph
        let target = this.findNearest(t, g); // class vertex
        let player = this.findNearest(this.pos, g); // class vertex
        // Get the path from the player's position to the target
        let result = aStar.AStarPathfind(g.getGraph(), player, target); // vertex array
        // Make the path for the player to follow
        let p = null; // class Path
        // Add the new path if we aren't already close enough to the target
        if(result !== null){
            p = new Path();
            for(let i = 0; i < result.size(); i++){
                p.add(result.get(i).getLoc());
            }
        }
        // Reset currentNode to start of the path
        this.resetPathNode();
        // Return the new path to follow
        return p;
    }
    
    /**
     * Path following algorithm
     * @param p the path to follow
     * @param t the target to approach
     */
    follow(p, t){
        let target = null;
        // Check if we are not within proximity to the target
        if(this.followingTarget && !this.withinTargetProximity(t) && p != null){
            // Find the node to seek
            if(p.getPath().size() > 0){
                // Set the target to the next available node in the path
                target = p.getPath().get(this.currentNode);
                // Check if we are within offset pixels of the target
                if(PVector.dist(pos, target) <= offset){
                    // Update to the next node to arrive at
                    this.currentNode++;
                    // Check if we are on the last node
                    if(this.currentNode == p.getPath().size()){
                        // Set the last node in the path as the one to arrive at
                        this.currentNode = p.getPath().size() - 1;
                    }
                }
                
                // Check if we're on the last node and the distance to the actual target is less than the distance
                // to that node
                if (this.currentNode == p.getPath().size() - 1) { // on the last node
                    if(PVector.dist(pos, t) < PVector.dist(pos, target) || pos != t){
                        this.seek(t);
                        //arrive(t);
                    } else {
                        //seek(t);
                        this.arrive(target);
                    }
                } else if(this.currentNode != p.getPath().size() - 1){
                    this.seek(target);
                }
            } else {
                // No reasonable path and we are close enough, so just arrive at the target
                this.seek(t);
            }
        } else {
            this.followingTarget = false;
        }
    }
    
    /**
     * Quantizes the target position by finding the nearest node on the world graph
     * @param t the target to quantize
     * @param g graph of room
     * @return the closest vertex to the target
     */
    findNearest(t, g){
        // Loop through each point in the graph and find the nearest node
        let size = g.getGraph().size();
        let dist_smallest = Double.MAX_VALUE; // change to greatest number value
        let closest = null;
        for(let i = 0; i < size; i++){
            // Get distance from target to current node
            let dist = Math.abs(PVector.dist(t, g.getGraph().get(i).getLoc()));
            // Check if new smallest distance to target
            if(dist <= dist_smallest){
                dist_smallest = dist;
                closest = g.getGraph().get(i);
            }
        }
        //System.out.println("closest vertex is " + closest.getValue());
        // Return the closest vertex
        return closest;
    }
    
    /**
     * Resets the current node to the beginning of a new path
     */
    resetPathNode(){
        this.currentNode = 0;
    }
    
    /** 
     * Returns a String representation of the given path.
     * Primarily used for testing.
     * @param path the path to generate (list of vertices)
     * @return a String representation for this path
     */
    pathToString(path){
        let disp = "";
        for(let i = 0; i < path.size(); i++){
            disp += path.get(i).getValue() + " ";
        }
        return disp;
    }
    
    /**
     * Checks the distance to the room boundaries from AI's
     * current location. Returns whether the AI is within the
     * appropriate range for steering away from these boundaries.
     * @param boundaries the boundaries to check (list of points)
     * @return whether the AI is within a certain distance to these boundaries
     */
    checkRoomBoundaries(boundaries){
        // Check for certain distance from screen edges
        // ** Note:
        //		height = dist(pos, width)
        //		width  = dist(pos, height)
        // Want the offset to be somewhere within the character's radius + some offset
        for(let i = 0; i < boundaries.size(); i++){
            if(PVector.dist(pos, boundaries.get(i)) <= 35)
                return true;
        }
        return false;
    }
    
    /**
     * Checks the distance from the nearest obstacle boundary to this AI and returns
     * whether or not it is within a certain offset.
     * @param obstacles the obstacles to check against (list of obstacles)
     * @return if this AI is within a set offset from the nearest boundary point
     */
    checkDistanceToObstacle(obstacles){
        // Find the nearest offset boundary to the AI
        let nearest = this.findNearestOffsetBoundary(obstacles);
        // Check if we are within a certain offset to the boundary
        // Note: this will probably need to be adjusted during testing
        
        // Return if we're within the specified bounds offset
        return PVector.dist(this.pos, nearest) <= BOUNDS_OFFSET;
    }
    
    /**
     * Returns the nearest obstacle boundary to this AI
     * @param obstacles the list of room obstacles to check
     * @return the nearest obstacle to this AI
     */
    findNearestOffsetBoundary(obstacles){
        // Iterate over the array of obstacles and determine the closest boundary location
        // to this AI
        let nearest = obstacles.get(0).getClosestBoundaryToPlayer(this);
        let smallestDist = PVector.dist(this.pos, nearest);
        
        for(let i = 1; i < obstacles.size(); i++){
            // Get the next obstacle
            let next = obstacles.get(i); // class Obstacle
            // Get the closest boundary from this obstacle
            let closest = next.getClosestBoundaryToPlayer(this);
            // Calculate distance from the ai to the boundary
            let dist = PVector.dist(this.position, closest);
            // Check if we are closer to the current object
            if(dist < smallestDist){
                // Update the smallest distance and nearest boundary
                nearest = closest;
                smallestDist = dist;
            }
        }
        // Return the nearest boundary
        return nearest;
    }
    
    /**
     * Sets a new random target on the room graph and directs the AI
     * to follow it until it is within a set offset from the target.
     * @param g the graph to follow (class GraphGenerator)
     * @param aStar provides A* pathfinding
     */
    followNewTarget(g, aStar){
        // Get a random point on the graph and pathfind
        let target_index = this.random.nextInt(g.getGraph().size());
        let target = g.getGraph().get(target_index).getLoc();
        let path = findNextTarget(target, g, aStar); // Path
        
        // Follow this path until we are within a set distance from our target
        while(PVector.dist(pos, target) > TARGET_PROX){
            this.follow(path, target);
            // perform AI updates
            run();
        }
    }
    
    /**
     * Pathfinds to the point closest to the target and follows it.
     * @param g Graph representing room
     * @param aStar A* algorithm provider
     */
    retreatToNearestPath(g, aStar){
        // Get nearest point on the path to follow
        let nearest = this.findNearest(this.pos, g).getNeighbors().get(0).getNeighbor().getLoc(); // experimenting with getting a neighbor
        // Pathfind to this point
        let path = this.findNextTarget(nearest, g, aStar);
        
        // Follow this path until we are within a set distance from our target
        while(PVector.dist(pos, nearest) > TARGET_PROX){
            this.follow(path, nearest);
            // perform AI updates
            this.run();
        }
    }
    
    /**
     * Determines if a character is within the current target's allowable proximity.
     * @param t the target to check
     * @return if the player is within the allowable target proximity
     */
    withinTargetProximity(t){
        return PVector.dist(pos, t) <= TARGET_PROX;
    }
    
    /**
     * Returns if a character is currently following a target
     * @return if a character is currently following a target
     */
    isFollowingTarget(){
        return this.followingTarget;
    }
    
    /**
     * Sets the state of following the current target
     * @param following the state of following the current target
     */
    setFollowingTarget(following){
        this.followingTarget = following;
    }
}

export default AI;