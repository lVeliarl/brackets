module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 1) {
    const stack = [];
    for (let k = 0; k < str.length; k++) {
      for (let i = 0; i < bracketsConfig.length; i++) {
        let openingBrackets = bracketsConfig[i][0];
        let closingBrackets = bracketsConfig[i][1];
        if (str[k] === closingBrackets && stack[stack.length - 1] === openingBrackets) {
          stack.pop();
        }
        else if (str[k] === openingBrackets) {
          stack.push(str[k]);
        }
      }
    }
    return stack.length ? false : true;
  }
  else {
    return false;
  }
}

