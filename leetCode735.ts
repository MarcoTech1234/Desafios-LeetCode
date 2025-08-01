function asteroidCollision(asteroids: number[]): number[] {
  let stack: number[] = [];

  for (let asteroid of asteroids) {
    let destroyed = false;

    while (
      stack.length > 0 &&
      stack[stack.length - 1] > 0 &&
      asteroid < 0
    ) {
      const top = stack[stack.length - 1];

      if (Math.abs(asteroid) > Math.abs(top)) {
        stack.pop();
      } else if (Math.abs(asteroid) === Math.abs(top)) {
        stack.pop();
        destroyed = true;
        break;
      } else {
        destroyed = true;
        break;
      }
    }

    if (!destroyed) {
      stack.push(asteroid);
    }
  }

  return stack;
}