function isValidParentheses(str) {
    const stack = [];

    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of str) {
        if (brackets[char]) {
            stack.push(char);
        } else {
            const lastBracket = stack.pop();
            if (!lastBracket || brackets[lastBracket] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


console.log(isValidParentheses("()"));
console.log(isValidParentheses("()[]{}"));
console.log(isValidParentheses("(]"));
console.log(isValidParentheses("([)]"));
console.log(isValidParentheses("{[]}"));