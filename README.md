## Welcome to the FizzBuzz app
Simple fun FizzBuzz app

- **E**xpress (sometimes referred to as Express.js): Back-end web application framework running on top of Node.js
- **N**ode.js : JavaScript runtime environment – lets you implement your application back-end in JavaScript
Use Node 10 or more

### Count
pass count as paramneter in the URL
local: http://localhost:8080/fizzbuzz/:count
pass 100 in {:count} if first 100 fizzbuzz numbers required

### Pre-requisites  
* node.js - [Download page](https://nodejs.org/en/download/) .  
* npm - comes with node or download yarn - [Download page](https://yarnpkg.com/lang/en/docs/install) .  

### Installation 
``` 
git clone 
cd fizzbuzz
npm install
npm run start (for development)
local: http://localhost:8080/fizzbuzz/:count
```
### Config
config fizz buzz number in src/config
on num1 return `Fizz`
on num2 return `Buzz`
on num1*num2 `FizzBuzz`
