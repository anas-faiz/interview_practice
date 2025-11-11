function generateAtoZ() {
  // your solution here
  let arr = [];

  for (let i = 65; i <= 90; i++){
    let characters = String.fromCharCode(i);
    arr.push(characters); 
  }
  return arr;
}

module.exports = { generateAtoZ };