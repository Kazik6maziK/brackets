module.exports = function check(str, bracketsConfig) {
  // your solution
  function Search() {
    for (let i = 0; i < newArray.length;) 
    {
      if (str.indexOf(newArray[i]) === -1) 
      {
        i++;
      } else if (str.indexOf(newArray[i]) !== -1) 
      {
        let itemNumber = str.indexOf(newArray[i]);
        str = str.slice(0, itemNumber) + str.slice(itemNumber + 2);
        i = 0;
      }
    }
}

let newArray = [];
for (let j = 0; j < bracketsConfig.length; j++) 
{
  let filled = bracketsConfig[j][0] + bracketsConfig[j][1];
  newArray.push(filled);
}


Search();
if (str.length > 0) 
{
  return false;
} else 
{
  return true;
}
}
