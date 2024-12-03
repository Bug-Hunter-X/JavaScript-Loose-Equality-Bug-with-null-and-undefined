# JavaScript Loose Equality Bug

This repository demonstrates a common JavaScript bug related to loose equality (==) when handling null and undefined values.

The `bug.js` file contains a function that attempts to handle null values, but due to the use of loose equality, it produces unexpected results when undefined is passed.

The `bugSolution.js` file provides a corrected version that uses strict equality (===) to avoid the issue.

## How to reproduce the bug
1. Clone this repository
2. Run `bug.js` using a JavaScript runtime (Node.js, browser console, etc.)
3. Observe the unexpected output when calling the function with `undefined` as an argument.

## Solution
Always use strict equality (===) when comparing values in JavaScript to avoid unexpected behavior caused by type coercion.