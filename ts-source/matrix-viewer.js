// Assuming the data is stored in a variable called `data`
const data = [
	[0, 1], [0, 2], [0, 5], [0, 9], [0, 12], [0, 13], [0, 17], [0, 18], [0, 19],
	[1, 0], [1, 3], [1, 6], [1, 8], [1, 0], [1, 11], [1, 14], [1, 16],
	[2, 0], [2, 3], [2, 7], [2, 11], [2, 16], [2, 17], [2, 18],
	[3, 0], [3, 1], [3, 2], [3, 3], [3, 7], [3, 11], [3, 14], [3, 16],
	[4, 0], [4, 3], [4, 7], [4, 12], [4, 13], [4, 17], [4, 18], [4, 19]
];

// Function to create the matrix
function createMatrix() {
	const maxRow = Math.max(...data.map(([row]) => row)) + 1;
	const maxCol = Math.max(...data.map(([, col]) => col)) + 1;
	const matrix = Array.from({ length: maxRow }, () => Array(maxCol).fill(0));

	for (const [row, col] of data) {
		matrix[row][col] = 1;
	}

	return matrix;
}

// Get the matrix
const matrix = createMatrix();

// Print the matrix
console.log(matrix.map(row => row.map(e => e == 1 ? "1" : " ").join(' ')).join('\n'));