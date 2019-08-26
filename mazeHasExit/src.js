// Given a one dimensional array find if you can exit or not

// Rules:
// Starting at index 0 you can move to as many places as the number at any given index

// Examples:
// Input: [1,2,0,1]
// Output: true

// Input: [2,0]
// Output:true 

// Input: [1,1,0,1]
// Output:false 
 
const hasExit = (maze, idx) => {
  if(maze.length <= idx) return true;
  if(maze[idx] === 0) return false;
  const jumps = maze[idx];
  let result = false;
  for(let i = 1; i <= jumps; i++){
    result = result || hasExit(maze, idx + i)
  };
  return result;
};

// const input = [1,2,0,1]
// const idx = 0

// hasExit(input, idx);