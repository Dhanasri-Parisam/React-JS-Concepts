import React from "react";

function JSX_Tutorial() {
  /*
  ============================================================
  FULL JSX TUTORIAL — 10 BASIC CONCEPTS IN ONE COMPONENT
  ============================================================
  This file covers:
  ✔ Simple JSX element
  ✔ JSX expressions
  ✔ Using JS variables inside JSX
  ✔ Inline CSS in JSX
  ✔ Conditional rendering
  ✔ React Fragments <> </>
  ✔ List rendering using map()
  ✔ Nested JSX elements
  ✔ Function call inside JSX
  ✔ Attributes in JSX (img, etc.)
  ============================================================
  */

  // 1️⃣ Simple JSX Element
  const element = <h2>Hello JSX — Simple Element</h2>;

  // 2️⃣ JSX Expression using {}
  const name = "Dhanush";
  const greeting = <p>Welcome, {name}! This is JSX Expression.</p>;

  // 3️⃣ JSX with JavaScript variables
  const age = 20;
  const msg = <p>Your age is: {age}</p>;

  // 4️⃣ JSX with inline CSS (CSS-in-JS style object)
  const styleElement = (
    <h3 style={{ color: "blue", backgroundColor: "lightgray", padding: "8px" }}>
      This is styled using inline CSS in JSX
    </h3>
  );

  // 5️⃣ Conditional Rendering using ternary operator
  const isLoggedIn = true;
  const message = (
    <p>{isLoggedIn ? "You are logged in 😊" : "Please log in 🔐"}</p>
  );

  // 6️⃣ JSX Fragment — allows returning multiple elements
  const fragmentExample = (
    <>
      <h3>Fragment Example</h3>
      <p>This content is inside a React Fragment.</p>
    </>
  );

  // 7️⃣ List Rendering using map()
  const fruits = ["Apple", "Banana", "Mango", "Papaya"];
  const fruitsList = (
    <ul>
      {fruits.map((item, index) => (
        <li key={index}>{item}</li> // key is required for list items
      ))}
    </ul>
  );

  // 8️⃣ Nested JSX Elements
  const nested = (
    <div>
      <h3>Nested JSX Example</h3>
      <p>This is a paragraph inside a div, properly nested.</p>
    </div>
  );

  // 9️⃣ Function call inside JSX
  function greet() {
    return "Good Morning! ☀️";
  }
  const output = <p>{greet()}</p>;

  // 🔟 JSX with attributes (img tag)
  const imageElement = (
    <img
      src="logo192.png"
      alt="Placeholder"
      width="150"
      style={{ borderRadius: "8px", marginTop: "10px" }}
    />
  );

  // ============================================================
  // RETURN ALL JSX EXAMPLES IN ORDER WITH HEADINGS
  // ============================================================
  return (
    <>
      <h1>🌟 React JSX Complete Concepts Tutorial</h1>
      <p>This component demonstrates all basic JSX concepts in React.</p>

      {/* 1. Simple JSX Element */}
      <h2>1️⃣ Simple JSX Element</h2>
      {element}

      {/* 2. JSX Expression */}
      <h2>2️⃣ JSX Expression Using {"{}"}</h2>
      {greeting}

      {/* 3. JavaScript Variables */}
      <h2>3️⃣ JSX with JavaScript Variables</h2>
      {msg}

      {/* 4. Inline CSS */}
      <h2>4️⃣ JSX with Inline CSS</h2>
      {styleElement}

      {/* 5. Conditional Rendering */}
      <h2>5️⃣ Conditional Rendering (Ternary)</h2>
      {message}

      {/* 6. Fragment */}
      <h2>6️⃣ JSX Fragment</h2>
      {fragmentExample}

      {/* 7. List Rendering */}
      <h2>7️⃣ List Rendering using map()</h2>
      {fruitsList}

      {/* 8. Nested Elements */}
      <h2>8️⃣ Nested JSX Elements</h2>
      {nested}

      {/* 9. Function call */}
      <h2>9️⃣ Calling Function Inside JSX</h2>
      {output}

      {/* 10. Attributes in JSX */}
      <h2>🔟 JSX Attributes Example</h2>
      {imageElement}

      <h2>🎉 End of JSX Tutorial</h2>
      <p>Great job! You have learned the most important JSX basics in React.</p>
    </>
  );
}

export default JSX_Tutorial;
