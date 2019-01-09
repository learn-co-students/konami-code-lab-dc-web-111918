const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let i = 0;
  document.body.addEventListener('keydown', function(current) {
    console.log(current.key);
      if ((current.key === "a") && (i === 9)){
        alert("KONAMI CODE ACTIVATE!");
        i = 0;
      } else if (current.key === codes[i]){
        console.log(`correct key ${i}: ${current.key}, codes[${i}]: ${codes[i]}`)
        i++;
      } else {
        i = 0;
      };
  });
};
