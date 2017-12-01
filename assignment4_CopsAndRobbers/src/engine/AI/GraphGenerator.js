import Vertex from './Vertex'
import Edge from './Edge'

const OPEN = 'OPEN';
const EXIT = 'EXIT';
const WALL = 'WALL';
class GraphGenerator {
	constructor(){
		this.points = []; // List of Vertices representing the room path
	}

	/** 
	 * Generates a graph of vertices based on the given grid structure.
	 * @param grid the grid from which to generate the room graph
	 * @param canvasWidth the width of the canvas
	 * @param canvasHeight the height of the canvas
	 */
	generateGraphFromGridCells(grid) {
		// Examine each cell and create initial verticies
		for(let i = 0; i < grid.length; i++) {
			this.points.push(new Vertex(i));
		}
		// Add neighbors for each vertex
		for(let i = 0; i < grid.length; i++) {
			let vertex = this.points[i];
			let neighbors = grid[i].neighbors;
			for(let j = 0; j < neighbors.length; j++) {
				let neighbor = this.points[neighbors[j]];
				// Add this neighbor to the current vertex
				vertex.addNeighbor(neighbor, 1);
			}
			// Update the vertex in the graph
			this.points[i] = vertex;
		}
	}
	
	/**
	 * Returns the Vertex array representing the graph of nodes for this graph
	 * @return the vertex array representing this graph
	 */
	getGraph(){
		return this.points;
	}
	
}

export default GraphGenerator