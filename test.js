const testFunction = (str, ...args) => {
  let counts = {};
  str.reduce( (acc, curr, i) =>`${acc}${curr}${ typeof args[i] === "function" 
    ? args[i]() 
    : args[i] || "" }`,"")
    .split(" ")
    .map((word) => { counts[word] = (counts[word] || 0) + 1;});
  return counts;
};




testFunction`apple ${() => `orange`} apple ${`lemon`} ${() =>`orange`} apple ${`grapes`} ${() => `fruits`}`;
