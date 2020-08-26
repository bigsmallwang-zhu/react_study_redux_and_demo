function test(count = 0, b) {
  console.log(count + b);
}

function sum(callback) {
  const a = 1;
  callback(undefined, a)
}

sum(test);