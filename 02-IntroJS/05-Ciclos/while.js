let index = 0;

while(index < 11) {
  console.log(index);
  index++;
}

var miArray = ["a", "b", "c"];

while (miArray.length > 0) {
  console.log(miArray);
  console.log("se elimina:", miArray.pop());
  // miArray.shift(); // se puede usar en lugar de .pop()
}

// 1. ["a", "b", "c"]
// 2. ["a", "b"]
// 3. ["a"] 
// 4. Ya no se ejecuta, termina el ciclo
