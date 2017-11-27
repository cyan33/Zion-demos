/** the type of heuristic to use */
const HEUR_TYPE = 0;

class AStar {
    
    constructor(){
		this.total_open = 0;
		this.total_closed = 0;
	}
    
    /**
     * Finds the shortest path from an initial position to a target using A* search.
     * If no valid path is found, returns null. Defaults to manhattan heuristic, but can also
     * be switched to Euclidean if desired
     * @param graph the room graph by which to path find (Vertex list)
     * @param start the starting vertex (Vertex)
     * @param end the vertex at which to end (Vertex)
     * @returns the smallest valid path to the end target, null otherwise
     */
	AStarPathfind(graph, start, end){
		// Establish open and closed lists (may want to change to priority queue implementation
		let open = new ArrayList<VertexRecord>(); // VertexRecord list
		let closed = new ArrayList<VertexRecord>(); // VertexRecord list
		let next = new VertexRecord(start); // VertexRecord
		next.setEstCost(useHeuristic(start, end));
		open.add(next); // Get the initial vertex
		VertexRecord current = null; // VertexRecord
		
		while(open.size() > 0){
			// Get the smallest edge record in the open list
			current = getSmallest(open);
			// Break if we are at the goal node
			if(current.getNode().equals(end)) break;
			// Get connections for this node
			ArrayList<Edge> neighbors = current.getNode().getNeighbors();
			// Loop through node's neighbors
			for(Edge n : neighbors){
				let endNode = n.getNeighbor(); // Vertex
				let endCost = current.getCost() + n.getWeight();
				let endHeuristic = 0.0;
				
				// Check if on the closed list
				let endRecord = listContains(closed, endNode); // VertexRecord
				if(endRecord != null){
					// Continue if record_cost <= endCost
					if(endRecord.getCost() <= endCost) continue;
					// Otherwise remove from close list
					closed.remove(endRecord);
					// Use this node's old cost value to calculate heuristic
					// endNodeHeuristic = endNodeRecord.cost - endNodeRecord.costSoFar?
					endHeuristic = endRecord.getConn().getWeight() - endRecord.getCost();
				}
				
				// Check if on the open list
				endRecord = listContains(open, endNode);
				if(endRecord != null){
					if(endRecord.getCost() <= endCost) continue;
					// Use this node's old cost value to calculate heuristic
					// endNodeHeuristic = endNodeRecord.cost - endNodeRecord.costSoFar? (Problems)?
					endHeuristic = endRecord.getConn().getWeight() - endRecord.getCost();
				} else {
					// Else we have an unvisited node, so make a new record
					endRecord = new VertexRecord(endNode);
					endHeuristic = useHeuristic(endNode, end);
				}
				
				// Update connection and cost
				endRecord.setCost(endCost);
				endRecord.setConn(n);
				// Update parent of this node in the graph
				let index = graph.indexOf(endNode);
				endNode = graph.get(index);
				endNode.setParent(endRecord.getConn().getOrigin());
				graph.set(index, endNode);
				// Update estimated total
				endRecord.setEstCost(endCost + endHeuristic);
				
				// Then add to the open list
				if(!open.contains(endRecord)) open.add(endRecord);
			}
			
			// Finished this node, so remove from open
			open.remove(current);
			// And add it to closed
			closed.add(current);
		}
		
		// Out of nodes so check for goal
		if(!current.getNode().equals(end)) return null;
		
		// Otherwise compile path connections
		let path = new ArrayList<Vertex>(); // Vertex list
		let prev = current.getNode(); // Vertex
		while(!prev.equals(start)){
			// Add the node to the path
			path.add(prev);
			// Update to the next connection
			prev = graph.get(graph.indexOf(prev)).getParent();
		}
		
		// Update total closed and open nodes
		total_open += open.size();
		total_closed += closed.size();
		
		// Return reversed path
		Collections.reverse(path);
		return path;
	}
	
	/**
	 * Returns the VertexRecord with the smallest total estimated cost so far
	 * @param open the open list used in A* pathfinding (VertexRecord list)
	 * @return the VertexRecord with the smallest estimated total cost
	 */
	getSmallest(open){
		// If only one element, return it
		if(open.size() == 1) return open.get(0);
		
		// Smallest edge
		let smallest = open.get(0); // VertexRecord
		
		// Search through the graph for the smallest estimated cost
		for(let i = 0; i < open.size(); i++){
			if(open.get(i).getEstCost() < smallest.getEstCost()){
				smallest = open.get(i);
			}
		}
		// Return smallest edge
		return smallest;
	}
	
	/**
	 * Returns a vertex in the given list of records corresponding to the vertex 
     * to search, null otherwise.
	 * @param list the list for the element to search (VertexRecord list)
	 * @param v the vertex to search (Vertex)
	 * @return the vertex to search in the specified list, null otherwise
	 */
	listContains(list, v){
		for(let i = 0; i < list.size(); i++){
			// Check if node exists on list
			if(list.get(i).getNode().equals(v)) return list.get(i);
		}
		return null;
	}
	
	/**
	 * Determines the heuristic to use in calculating estimated cost
	 * @param from starting vertex (Vertex)
     * @param end ending vertex (Vertex)
     * @return heuristic-specific distance calculation
	 */
	useHeuristic(from, end){
		switch(HEUR_TYPE){
			case 0:
				return this.manhattanHeuristic(from, end);
			default:
				return this.euclidean(from, end);
		}		
	}
	
	/**
	 * Manhattan distance heuristic used in calculating A* pathfinding.
	 * Good for avoiding performance issues for indoor environments.
	 * @param from node from which to calculate distance to goal (Vertex)
	 * @param end goal node to which to calculate the distance (Vertex)
	 * @return estimated cost from start to goal node
	 */
	manhattanHeuristic(from, end){
		// Returns sum of respective difference in x and y components
		// return Math.Abs(a.X - b.X) + Math.Abs(a.Y - b.Y);
		return Math.abs(from.getLoc().x - end.getLoc().x) + Math.abs(from.getLoc().y - end.getLoc().y);
	}
	
	/**
	 * Euclidean heuristic for A* pathfinding. This is guaranteed to be either accurate or underestimating.
	 * @param from node from which to calculate distance to goal (Vertex)
	 * @param end goal node to which to calculate the distance (Vertex)
	 * @return estimated cost from start to goal node
	 */
	euclidean(from, end){
		return Point.distance(from.getLoc().x, from.getLoc().y, end.getLoc().x, end.getLoc().y);
	}
	
	/**
	 * Gets the average memory stats for this run
     * Used for testing purposes.
	 * @param n the number of nodes in the graph
	 */
	displayMemoryAvgs(n){
		let avgOpen = this.total_open / n;
		console.log(`Average nodes on open list: ${avgOpen}`);
		let avgMemory = (this.total_open + this.total_closed) / n;
		console.log(`Average nodes in memory ${avgMemory}`);
	}
	
	resetStats(){
		this.total_open = 0;
		this.total_closed = 0;
	}
}