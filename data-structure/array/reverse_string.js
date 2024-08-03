// create a function that reverse a string
function reverse(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  console.log(result);
}

reverse("Hi my name is Pinyada");
