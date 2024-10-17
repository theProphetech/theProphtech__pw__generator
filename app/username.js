function integrate__usernamegene(output, length, num, upper, prefix, suffix) {
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
  const number__arr = [];
  const uppercase__arr = [];
  const default__arr = [];
  //LOOPING FOR EACH FEATURES

  base__arr.forEach((value) => {
    if (/[A-Za-z0-9]/.test(value)) {
      alphanumeric__arr.push(value);
    }
  });
  base__arr.forEach((value) => {
    if (/[0-9]/.test(value)) {
      number__arr.push(value);
    }
  });

  base__arr.forEach((elem, index, arr__self) => {
    if (/[A-Za-z]/.test(elem)) {
      // continue
      default__arr.push(elem);
    }
  });

  base__arr.forEach((value) => {
    if (/[A-Z]/.test(value)) {
      uppercase__arr.push(value);
    }
  });

  if (length.value >= 4 && length.value <= 30) {
    let username__length = +length.value;
    for (let i = 0; i < default__arr.length; i++) {
      let auto__gene = Math.trunc(Math.random() * default__arr.length);

      string__output += default__arr[auto__gene];
    }
    last__ouput = string__output.slice(0, username__length);
    output.textContent = last__ouput;
  } else {
    length.value = 4;
  }

  if (length.value && num.checked) {
    string__output = "";
    last__ouput = "";
    for (let i = 0; i < alphanumeric__arr.length; i++) {
      let auto__gene = Math.trunc(Math.random() * alphanumeric__arr.length);

      string__output += alphanumeric__arr[auto__gene];
    }
    last__ouput = string__output.slice(0, +length.value);
    output.textContent = last__ouput;
  }

  if (length.value && upper.checked) {
    string__output = "";
    last__ouput = "";
    for (let i = 0; i < uppercase__arr.length; i++) {
      let auto__gene = Math.trunc(Math.random() * uppercase__arr.length);

      string__output += uppercase__arr[auto__gene];
    }
    last__ouput = string__output.slice(0, +length.value);
    output.textContent = last__ouput;
  }

  /* WORK ON PREFIX AND SUFFIX */
  let prefix__output;
  let suffix__output;
  if (prefix.value && suffix.value === "") {
    prefix__output = `${prefix.value}${last__ouput}`;
    output.textContent = prefix__output;
  } else if (suffix.value && prefix.value === "") {
    suffix__output = `${last__ouput}${suffix.value}`;
    output.textContent = suffix__output;
  } else if (prefix.value !== "" && suffix.value !== "") {
    output.textContent = `${prefix.value}${last__ouput}${suffix.value}`;
  }
}

export { integrate__usernamegene };
