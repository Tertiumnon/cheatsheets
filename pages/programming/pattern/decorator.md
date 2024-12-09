# Decorator Pattern

Dynamically adds responsibility to the interface by wrapping the original code.

Design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other instances of the same class.

## Example

### JS (ES6)

```js
function validateParam(min, max) {
  return function (target, key, index) {
    const originalMethod = target[key];
    target[key] = function (...args) {
      const arg = args[index];
      if (arg < min || arg > max) {
        throw new Error(`Argument at index ${index} is out of range.`);
      }
      return originalMethod.apply(this, args);
    };
  };
}

class MathOperations {
  @validateParam(0, 10)
  multiply(a, b) {
    return a * b;
  }
}

const math = new MathOperations();
math.multiply(5, 12); // Throws an error
```
