export const TURNS = { x: '🔴', o: '🟡'}

export const WINNER_COMBOS = [
  // Filas horizontales (misma fila, diferentes columnas)
  [[0, 0], [1, 0], [2, 0], [3, 0]], // Fila 1
  [[0, 1], [1, 1], [2, 1], [3, 1]], // Fila 2
  [[0, 2], [1, 2], [2, 2], [3, 2]], // Fila 3
  [[0, 3], [1, 3], [2, 3], [3, 3]], // Fila 4

  // Columnas verticales (misma columna, diferentes filas)
  [[0, 0], [0, 1], [0, 2], [0, 3]], // Columna 1
  [[1, 0], [1, 1], [1, 2], [1, 3]], // Columna 2
  [[2, 0], [2, 1], [2, 2], [2, 3]], // Columna 3
  [[3, 0], [3, 1], [3, 2], [3, 3]], // Columna 4

  // Diagonales ascendentes (de izquierda a derecha, subiendo)
  [[0, 3], [1, 2], [2, 1], [3, 0]], // Diagonal de esquina inferior izquierda a superior derecha

  // Diagonales descendentes (de izquierda a derecha, bajando)
  [[0, 0], [1, 1], [2, 2], [3, 3]] 
  ]