/**
 * This file contains constants which are important to the functioning of the game. Because they're
 * defined as constants (const) they cannot be changed in other parts of the code.
 */

/**
 * CELL_SIZE and CANVAS_SIZE combined determine how large the game window will be.
 * The window will be divided into an invisible grid which will be CANVAS_SIZE cells wide, and
 *  CANVAS_SIZE cells high. Each cell will have a height and width of CELL_SIZE pixels.
 */
// The dimensions of each cell
const CELL_SIZE = 20;
// The number of cells the canvas contains both horizontally and vertically
const CANVAS_SIZE = 5;

/**
 * Keyboard actions have numerical values. Assigning these to constants allows us
 * to reference these values by the name's that have been assigned.
 * [!] Do not change these values.
 */
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;

/**
 * Variables to simplify movement naming
 * [!] Do not change these values.
 */
const MOVE_UP = -CELL_SIZE;
const MOVE_DOWN = CELL_SIZE;
const MOVE_LEFT = -CELL_SIZE;
const MOVE_RIGHT = CELL_SIZE;