/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if(size === undefined){return string;}
  let currChar = '';
  let counter = 0;
  let endStr = '';
  for (let char of string){
    if(char !== currChar){
      currChar = char;
      counter = 0;
    }
    if(counter < size)
    {
      endStr += char;
      counter++
    }
  }
  return endStr;
}
