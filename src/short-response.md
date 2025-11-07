# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Question 1

### Prompt 1

What are the core principles of encapsulation in object-oriented programming?

### Response 1

Your response here...
Encapsulation is the OOP principle of hiding an object's internal data and providing controlled access through methods. It ensures that an object’s state cannot be modified directly from outside, which protects the information of the data. By using private variables and public methods, encapsulation also supports better code organizing and simplicity, making code easier to maintain and understand.

---

## Question 2

### Prompt 2

The code snippet below is an example of a **closure**.

```js
const multiplyNumsBy = (nums, multiplier) => {
  return nums.map((num) => num * multiplier);
};

const multiplesOfFive = multiplyNumsBy([1,2,3,4], 5); // [5, 10, 15, 20]
```

First, define what a **closure** is in your own words and then explain how this example includes a closure.

### Response 2

Your response here...

A closure is a function that remembers and has access to variables from the scope in which it was created, even after that scope has finished executing. In the example, multiplyNumsBy returns a function (num => num * multiplier) that uses the multiplier parameter from its outer scope. This allows the inner function to “remember” the value of multiplier when multiplying each number in the array, which demonstrates a closure.

---

## Question 3

### Prompt 3

Consider the code snippet below showing a factory function for creating animal objects. The `makeNoise` method is not working as intended:

```js
const makeAnimal = (name, species, sound) => {
  const animal = {
    name: name,
    species: species,
    makeNoise: () => {
      console.log(`${this.name} the ${this.species} says ${sound}`)
    }
  }
  return animal;
}

const betty = makeAnimal('betty', 'cat', 'meow');
betty.makeNoise(); // undefined the undefined says meow

const bugs = makeAnimal('bugs', 'bunny', 'whatsup doc');
bugs.makeNoise(); // undefined the undefined says meow says whatsup doc
```

First, define the `this` keyword.

Then, explain why the `makeNoise` method is not working (why are `this.name` and `this.species` returning `undefined`?).

Finally, update the code snippet above to fix it.

### Response 3

Your response here...
The this keyword refers to the object that is currently executing the code. In the original makeAnimal snippet, makeNoise is defined as an arrow function, and arrow functions do not have their own this, they recieve it from the enclosing scope, which is not the animal object. Therefore, this.name and this.species are undefined. To fix this, we can use a regular function for makeNoise so that this correctly refers to the object:

```js
const makeAnimal = (name, species, sound) => {
  const animal = {
    name: name,
    species: species,
    makeNoise() {     // removed arrow function
      console.log(`${this.name} the ${this.species} says ${sound}`);
    }
  };
  return animal;
};

const betty = makeAnimal('betty', 'cat', 'meow');
betty.makeNoise();
const bugs = makeAnimal('bugs', 'bunny', 'whatsup doc');
bugs.makeNoise();