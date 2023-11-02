const spinWords = (str) => {
    const arr = str.split(" ");
      const result = [];

      for (let i of arr) {
        if (i.length >= 5) {
          const reverse = i.split("").reverse().join("");
          result.push(reverse);
        } else {
          result.push(i);
        }
      }
    return result.join(" ");
}

module.exports = spinWords