const input = [1,2,0,1]
const idx = 0
 
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

hasExit(input, idx);