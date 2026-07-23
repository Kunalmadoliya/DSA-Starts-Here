var isValid = function (s) {
    let stack = [];
    const map = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    for (const char of s) {
        if (!map[char]) {
            stack.push(char);
        } else {
            let top = stack.pop();
            if (top !== map[char]) return false;
        }
    }

    return stack.length === 0;
};

isValid("()[]{}");
