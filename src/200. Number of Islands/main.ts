// 200. Number of Islands solved by @kitanoyoru
// https://leetcode.com/problems/number-of-islands/

const numIslands = (grid: string[][]): number => {
  const rows: number = grid.length
  const columns: number = grid[0].length
  const visited: boolean[][] = []

  let count: number = 0

  const dfs = (x: number, y: number) => {
    let q: number[][] = []

    q.push([x, y])
    visited[x][y] = true

    while (q.length > 0) {
      const [x, y] = q.pop() as number[]
      // north
      if (grid[x][y + 1] && !visited[x][y + 1] && grid[x][y + 1] == "1") {
        q.push([x, y + 1])
        visited[x][y + 1] = true
      }
      // east
      if (grid[x + 1] && !visited[x + 1][y] && grid[x + 1][y] == "1") {
        q.push([x + 1, y])
        visited[x + 1][y] = true
      }
      // south
      if (grid[x][y - 1] && !visited[x][y - 1] && grid[x][y - 1] == "1") {
        q.push([x, y - 1])
        visited[x][y - 1] = true
      }
      // west
      if (grid[x - 1] && !visited[x - 1][y] && grid[x - 1][y] == "1") {
        q.push([x - 1, y])
        visited[x - 1][y] = true
      }
    }
  }

  for (let i = 0; i < rows; ++i) {
    visited.push([])
    for (let j = 0; j < columns; ++j) {
      visited[i].push(false)
    }
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < columns; ++j) {
      if (!visited[i][j] && grid[i][j] == "1") {
        dfs(i, j)
        ++count
      }
    }
  }
  return count
}
