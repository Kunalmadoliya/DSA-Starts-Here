var nextGreatestLetter = function (letters, target) {
    let start = 0, end = letters.length - 1
    let targetChar = target.charCodeAt(0)

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)

        if (letters[mid].charCodeAt(0) > targetChar) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }

    return letters[start % letters.length]
}