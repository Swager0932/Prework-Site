const distance = 25
const speed = 20
for (let i = 0; i < distance; i++) {
  setTimeout(() => {
    console.clear();
    console.log(`D${' '.repeat(i)}->${' '.repeat(distance - i)}O`)
  }, i * speed)
}
setTimeout(() => {
  console.clear()
  console.log(`D${' '.repeat(distance + 1)}-0>`)
}, (distance + 1) * speed);
