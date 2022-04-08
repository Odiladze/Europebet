//Brackets

var isValid = function (s) {
  let bracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let answer = [];
  for (let char of s) {
    if (bracket[char]) {
      answer.push(bracket[char]);
    } else {
      if (answer.pop() !== char) return false;
    }
  }
  return !answer.length;
};

//Jewels and Stones

var numJewelsInStones = function (Jewels, Stones) {
  var count = 0;
  for (var i = 0; i < Jewels.length; i++) {
    for (var k = 0; k < Stones.length; k++) {
      if (Jewels[i].includes(Stones[k])) {
        count++;
      }
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
