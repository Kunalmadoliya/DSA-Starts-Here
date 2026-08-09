function getMiddle() {
  let count = this.length();
  console.log(count);

  let current = this.head;
  let middle = Math.floor(count / 2);

  for (let i = 0; i < middle; i++) {
    current = current.next;
  }

  return current;
}

getMiddle();
