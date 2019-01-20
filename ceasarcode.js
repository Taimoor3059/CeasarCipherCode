function rot13(str) { // LBH QVQ VG!
    let hello = str.toUpperCase();
    let newArr = hello.split("");
  
    let code = {
      A: "N",
      B: "O",
      C: "P",
      D: "Q",
      E: "R",
      F: "S",
      G: "T",
      H: "U",
      I: "V",
      J: "W",
      K: "X",
      L: "Y",
      M: "Z",
      N: "A",
      O: "B",
      P: "C",
      Q: "D",
      R: "E",
      S: "F",
      T: "G",
      U: "H",
      V: "I",
      W: "J",
      X: "K",
      Y: "L",
      Z: "M"
    }
  
    let result = "";
    let recar = '';
  
    for (let x = 0; x < str.length; x++) {
      if (code[str[x]] == undefined) {
        recar = str[x];
      } else {
        recar = code[str[x]]
      }
      result += recar;
    }
    
    return result; 
  }
  
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"));