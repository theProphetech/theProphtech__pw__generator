function integrate__pwgene(output, length, num, special) {
  let string__output = "";
  let last__ouput = "";
  function char__codepoint() {
    // THIS FUNCTION GENERATE THE RANDOM CHARACTERS
    let code__points = []; //ARRAY WILL BE RETURN;
    for (let i = 33; i < 127; i++) {
      code__points.push(String.fromCodePoint(i));
    }
    return code__points;
  }

  let base__arr = char__codepoint(); //RETURN ARRAY;

  //lIST OF ARRAYS TO HELP SELECT USERS WANTS
  const alphanumeric__arr = [];
  const defaultspecial__arr = [];

  const default__arr = [];
  //LOOPING FOR EACH FEATURES

  base__arr.forEach((elem) => {
    if (/[^0-9]/.test(elem)) {
      defaultspecial__arr.push(elem);
    }
  });

  base__arr.forEach((value) => {
    if (/[A-Za-z0-9]/.test(value)) {
      alphanumeric__arr.push(value);
    }
  });

  base__arr.forEach((elem, index, arr__self) => {
    if (/[A-Za-z]/.test(elem)) {
      // continue
      default__arr.push(elem);
    }
  });

  if (length.value >= 6 && length.value <= 30) {
    for (let i = 0; i < default__arr.length; i++) {
      let auto__gene = Math.trunc(Math.random() * default__arr.length);
      string__output += default__arr[auto__gene];
    }
    last__ouput = string__output.slice(0, length.value);
    output.textContent = last__ouput;
    length.value = "";
  }

  if (length.value && num.checked) {
    string__output = "";
    last__ouput = "";
    for (let i = 0; i < alphanumeric__arr.length; i++) {
      let auto__gene = Math.trunc(Math.random() * alphanumeric__arr.length);
      string__output += alphanumeric__arr[auto__gene];
    }
    last__ouput = string__output.slice(0, length.value);
    output.textContent = last__ouput;
  }
  if (length.value && special.checked) {
    string__output = "";
    last__ouput = "";
    for (let i = 0; i < defaultspecial__arr.length; i++) {
      let auto__gene = Math.trunc(Math.random() * defaultspecial__arr.length);
      string__output += defaultspecial__arr[auto__gene];
    }
    last__ouput = string__output.slice(0, length.value);
    output.textContent = last__ouput;
  }
  if (length.value && special.checked && num.checked) {
    string__output = "";
    last__ouput = "";
    for (let i = 0; i < base__arr.length; i++) {
      let auto__gene = Math.trunc(Math.random() * base__arr.length);
      string__output += base__arr[auto__gene];
    }
    last__ouput = string__output.slice(0, length.value);
    output.textContent = last__ouput;
  }
}

export { integrate__pwgene };
