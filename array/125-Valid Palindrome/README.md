# 🔍 125. Valid Palindrome

**Difficulty:** Easy  
**Approach:** Two Pointers

## Problem

Given a string `s`:

- Ignore uppercase/lowercase.
- Ignore spaces and special characters.
- Return `true` if the remaining string is a palindrome.
- Otherwise, return `false`.

> **Required Time Complexity:** `O(n)`

---

## Examples

```text
Input: s = "A man, a plan, a canal: Panama"
Output: true
```

```text
Input: s = "race a car"
Output: false
```

```text
Input: s = " "
Output: true
```

---

## Idea

### Brute Force

- Convert the string to lowercase.
- Remove all non-alphanumeric characters.
- Store the cleaned string.
- Compare it using two pointers.

---

### Optimal

- Use two pointers on the original string.
- Skip non-alphanumeric characters.
- Compare lowercase characters.
- If they don't match, return `false`.
- If all match, return `true`.

---

## JavaScript Solution (Brute Force)

```javascript
var isPalindrome = function (s) {
    if (s === "") return true;

    let str = "";
    s = s.toLowerCase();

    for (let i = 0; i < s.length; i++) {
        const ascii = s.charCodeAt(i);

        if (
            (ascii >= 97 && ascii <= 122) ||
            (ascii >= 48 && ascii <= 57)
        ) {
            str += s[i];
        }
    }

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};
```

---

## JavaScript Solution (Optimal)

```javascript
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) {
            left++;
        }

        while (left < right && !isAlphanumeric(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

function isAlphanumeric(ch) {
    return (
        (ch >= "a" && ch <= "z") ||
        (ch >= "A" && ch <= "Z") ||
        (ch >= "0" && ch <= "9")
    );
}
```

---

## Complexity

### Brute Force

- **Time:** `O(n)`
- **Space:** `O(n)`

### Optimal

- **Time:** `O(n)`
- **Space:** `O(1)`