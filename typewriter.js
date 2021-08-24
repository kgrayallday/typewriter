const sentence = "watch me type 100 words per minute!";
let counter = 0;
for (const char of sentence) {
  let delay = counter
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, delay)
  counter += 80;
}

setTimeout(() => {
  console.log('\n');
}, 3500)


