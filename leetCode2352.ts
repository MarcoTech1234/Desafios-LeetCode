function equalPairs(grid: number[][]): number {
  let result = 0;
  const hashMapRow: Map<string, number> = new Map();
  const columns: string[] = [];

  for (let row = 0; row < grid[0].length; row++) {
    const currentRow = grid[row];
    const joinRow = currentRow.join(",");
    hashMapRow.set(joinRow, (hashMapRow.get(joinRow) ?? 0) + 1);

    const column: number[] = [];
    for (let col = 0; col < grid[0].length; col++) {
      column.push(grid[col][row]);
    }

    columns.push(column.join(","));
  }

  for (const word of columns) {
    if (hashMapRow.has(word)) {
      result += hashMapRow.get(word)!;
    }
  }

  return result;
}
