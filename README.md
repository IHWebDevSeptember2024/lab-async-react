![Ironhack logo](https://i.imgur.com/1QgrNNw.png)

# LAB | Introduction to Asynchronous JavaScript and Promises

## Introduction

As web applications become more dynamic and interactive, understanding asynchronous JavaScript and Promises is crucial. In this lab, you will practice handling asynchronous operations using Promises and integrate these concepts into a React application using the `useEffect` hook.

By the end of this lab, you will have built a React component that fetches data from a public API, manages loading and error states, and displays the data to the user.

## Requirements

- Fork this repository.
- Clone your forked repository to your local machine.
- Have Node.js and npm installed.

## Submission

Upon completion, run the following commands:

```shell
git add .
git commit -m "done"
git push origin main
```

Then, create a Pull Request.

## Instructions

### Iteration 1: Setting Up the React App

Make sure your application is running correctly.

```bash
npm install
npm run dev
```

### Iteration 2: Understanding Asynchronous JavaScript

In this iteration, you will write some basic asynchronous JavaScript code to understand how Promises work.

1. Create a new file called `async-example.js` in the `src` directory.
2. Write a function that returns a Promise which resolves after 2 seconds with a message "Data loaded".
3. Use `.then()` and `.catch()` to handle the Promise and log the result or error to the console.
4. Import and call this function in your main `App` component to see the result in the browser console.

**Example of a promise:**

````javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!');
    // or reject('Error loading data');
  }, 2000);
});


**Example of exporting and importing variables:**

```javascript
const myVariable = 'Hello, world!';
export default myVariable;
````

```javascript
import myVariable from "./path/to/file";
```

<details>
  <summary>show solution 🙈</summary>

```javascript
// async-example.js
function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
      // or reject('Error loading data');
    }, 2000);
  });
}

export default loadData;
```

```javascript
// App.js
import React, { useEffect } from "react";
import loadData from "./async-example";

function App() {
  useEffect(() => {
    loadData()
      .then((message) => console.log(message))
      .catch((error) => console.error(error));
  }, []);

  return <div className="App">Check the console for messages.</div>;
}

export default App;
```

</details>

### Iteration 3: Fetching Data with `fetch` and Promises

Now, you will use the `fetch` API to retrieve data from a public API using Promises.

1. Choose a public API from the list below or find one that interests you:

   - [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
   - [PokéAPI](https://pokeapi.co/)
   - [The Star Wars API](https://swapi.dev/)
   - [The Rick and Morty API](https://rickandmortyapi.com/)

2. Create a new function called `fetchData` in a file `api.js` that uses `fetch` to retrieve data from the API.

3. Use `.then()` and `.catch()` to handle the Promise returned by `fetch`.

4. In your `App` component, call `fetchData` inside a `useEffect` hook and log the data to the console.

**Example:**

<details>
  <summary>show solution 🙈</summary>

```javascript
// api.js
function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

export default fetchData;
```

```javascript
// App.js
import React, { useEffect } from "react";
import fetchData from "./api";

function App() {
  useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
    });
  }, []);

  return <div className="App">Fetching data...</div>;
}

export default App;
```

</details>

### Iteration 4: Using `async/await` for Cleaner Syntax

Commit your changes before proceeding.

```bash
git add .
git commit -m "feat: fetch data with promises"
git push origin main
```

Refactor your `fetchData` function to use `async/await` instead of `.then()` and `.catch()`.

1. Modify the `fetchData` function to be an `async` function.
2. Use `try` and `catch` blocks to handle errors.
3. Ensure that the function still returns the fetched data.

**Example of a try/catch block with an async function:**

```javascript
async function fetchData() {
  try {
    const response = await fetch("your-api-url");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

<details>
  <summary>show solution 🙈</summary>

```javascript
// api.js
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default fetchData;
```

```javascript
// App.js
import React, { useEffect } from "react";
import fetchData from "./api";

function App() {
  async function getData() {
    const data = await fetchData();
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return <div className="App">Fetching data with async/await...</div>;
}

export default App;
```

</details>

### BONUS Iteration 5: Integrating Data Fetching into a React Component

Create a new React component that fetches data when it mounts and displays it.

1. Create a new functional component called `DataFetcher.js`.
2. Initialize state variables `data`, `loading`, and `error` using `useState`.
3. Use the `useEffect` hook to fetch data when the component mounts.
4. Manage loading and error states appropriately.
5. Render the fetched data in a user-friendly format.

<details>
  <summary>show solution 🙈</summary>

```javascript
// DataFetcher.js
import { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  return (
    <div>
      <h1>Post Title: {data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
}

export default DataFetcher;
```

```javascript
// App.js
import React from "react";
import DataFetcher from "./DataFetcher";

function App() {
  return (
    <div className="App">
      <DataFetcher />
    </div>
  );
}

export default App;
```

</details>

## Expected Results

By completing the iterations above, you should have:

- A React application that demonstrates asynchronous JavaScript using Promises.
- Components that fetch data from an API using both `.then()`/`.catch()` and `async`/`await`.
- A component that handles loading and error states gracefully.

## FAQs

<details>
  <summary>How do I handle errors when using async/await?</summary>

When using `async/await`, you can handle errors using a `try`/`catch` block.

```javascript
async function fetchData() {
  try {
    const response = await fetch("your-api-url");
    // ... handle response
  } catch (error) {
    // Handle the error
    console.error("Error:", error);
  }
}
```

</details>

<details>
  <summary>Why can't I make the useEffect callback function async?</summary>

The `useEffect` hook should not return a Promise, so making the callback function `async` (which returns a Promise) is discouraged. Instead, define an async function inside the `useEffect` and call it.

```javascript
useEffect(() => {
  async function fetchData() {
    // ... fetch data
  }
  fetchData();
}, []);
```

</details>

  <summary>I'm getting an error "Cannot read property 'map' of undefined". What does this mean?</summary>

This error typically occurs when you try to use `.map` on a variable that is `undefined` or `null`. Make sure that the variable is initialized properly and contains an array before using `.map`.

For example:

```javascript
const [items, setItems] = useState([]); // Initialize with an empty array

// Later in your code
items.map((item) => /* ... */);
```

</details>

## Submission

Once you have completed the lab, submit your work by pushing your code to your forked repository and creating a Pull Request.

**Happy coding!** 💙
