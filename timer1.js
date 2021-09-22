const input = process.argv.slice(2);
const num = input.map(i => Number(i));
let timer = 0;
for (const item of num) {
  timer = item * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timer)
};