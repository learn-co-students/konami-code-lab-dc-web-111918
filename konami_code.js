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
  let index = 0;
  document.addEventListener('keydown', function(current) {
    const key = current.key;
    console.log(codes.length)

    if (key === codes[index]) {
      console.log(key)
        index++;
        if (index === codes.length) {
          alert("Hurray!");
            console.log("yay")
            index = 0
          }
    }

     else {
      index = 0;
    };

  });
};

init()
