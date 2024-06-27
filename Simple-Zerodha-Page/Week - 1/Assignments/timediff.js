let startTime = performance.now();
const delay = 1000;
function func1() {
  let EndTime = performance.now();
  const elapsedTime = EndTime - startTime;

  console.log(`Expected delay: ${delay} ms`);
  console.log(`Actual elapsed time: ${elapsedTime} ms`);
}

setTimeout(func1, delay);
