const letterFrequency = (str) => {
  let arr = [];
  let seen = new Set();
  for (i = 0; i < str.length; i++) {
    if (!seen.has(str[i])) {
      let count = str.split("").filter((n) => n === str[i]).length;
      arr.push({ letter: str[i], freq: count });
      seen.add(str[i]);
    }
  }
  console.log(arr);
};

letterFrequency("Khayalala");
