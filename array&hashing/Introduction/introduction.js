// Hash function ka use kisi bhi data (jaise username) ko ek fixed-size index me convert karke usse fast store aur retrieve karne ke liye hota hai.




function simpleHash(name, maxValue) {
  let result = 0;
  for (let i = 0; i < name.length; i++) {
    const ascii = name.charCodeAt(i);
    result += ascii;
  }

  return result % maxValue;
}

console.log(simpleHash("what is data structure", 50));

//how does it looks a like

class hashTable {
  constructor(size = 50) {
    this.keyMap = Array.from(50);
  }

  simpleHash(key, maxValue) {
    let result = 0;
    for (let i = 0; i < key.length; i++) {
      const ascii = key.charCodeAt(i);
      result += ascii;
    }

    return result % maxValue;
  }

  set(key, value){
    const hashCode = this.simpleHash(key , this.keyMap.length)

    if(!this.keyMap[hashCode]){
        this.keyMap[hashCode] = []
    }

    this.keyMap[hashCode].push([key, value]);
  }


  get(key){
    const hashCode = this.simpleHash(key , this.keyMap.length)

    const result = this.keyMap[hashCode]
    for (const item of result) {
        if(item[0] === key){
            return item[1]
        }
    }
  }
}


const hashValues = new hashTable()


hashValues.set("name" , "madoliya")
hashValues.set("name" , "kunal")
hashValues.set("name" , "mahesh")
hashValues.set("name" , "mahinsh")
hashValues.set("name" , "hi")





console.log(hashValues.keyMap);



