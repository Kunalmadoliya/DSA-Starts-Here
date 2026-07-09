//optimise solution O(n·k log k) space O(n·k)
const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

const map = new Map();

for (const word of arr) {
  const key = word.split("").sort().join("");

  if (!map.has(key)) {
    map.set(key, []);
  }

  console.log(map.get(key).push(word));

  console.log(map.values());
}

return [...map.values()];
