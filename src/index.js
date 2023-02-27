module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets = bracketsConfig;
  let stack = []
  let flag = true
  for (let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket)
    if (bracketsIndex === -1){
      continue
    }

    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1)
    } else {
      if(stack.pop() !== bracketsIndex) {
        flag = false;
      }
    }
  }
  return flag;
}
