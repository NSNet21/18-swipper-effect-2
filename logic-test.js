const slideLength = 7;
const slideCount = slideLength;
let index = 0;

for (let i = 0; i < 15; i++) {
  index = (index + 1) % slideCount;
  console.log(index);
}

console.log("");
console.log("");
index = 6;

for (let i = 0; i < 15; i++) {
  index = (index - 1 + slideCount) % slideCount;
  console.log(index);
}

index = 0;
console.log("");
console.log("");
