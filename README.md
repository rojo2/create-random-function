# Create Random Function
![Travis CI](https://travis-ci.org/rojo2/create-random-function.svg?branch=master)

```javascript
import createRandomFunction from "@rojo2/create-random-function";

const random = createRandomFunction();
random() // returns a random value

const initialValue = 2;
const random2 = createRandomFunction(initialValue);
random() !== random2()
```

NOTE: You should never use this random values for cryptography.

Made with :heart: by ROJO 2 (http://rojo2.com)
