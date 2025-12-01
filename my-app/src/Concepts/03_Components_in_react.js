// Components in React
// Components are reusable blocks that build the UI in a React application.
// They help break a complex interface into smaller and manageable parts.
// Components can be created using functions or classes.
// Components receive inputs called props and can maintain internal data known as state.
// Using components improves reusability, readability, and maintainability of the application.

import { createElement } from "react"


// import React from "react";

// function Components_in_react() {
//     return (
//         <div>
//             <h2>Components in React</h2>
//             <p>
//                 Components are the building blocks of a React application. They allow you to create reusable UI elements that can manage their own state and accept inputs called "props". By breaking down the UI into smaller components, you can create more maintainable and scalable applications.
//             </p>
//         </div>
//     );
// }

// export default Components_in_react;

// class components in react
/*
  - Class components are a way to define components in React using ES6 classes.
    - They extend the React.Component class and must include a render() method that returns JSX.
    - Class components can manage their own state using this.state and can respond to lifecycle events using methods like componentDidMount and componentWillUnmount.
    - They can also accept props via this.props.
  - However, with the introduction of React Hooks, functional components have become more popular for their simplicity and ease of use.
*/


// Class Components in React
// Class components are created using ES6 class syntax.
// They extend the React.Component class provided by React.
// Every class component must include a render method which returns JSX.
// They can hold and manage their own state using this.state.
// They can access props through this.props.
// Class components also provide lifecycle methods like componentDidMount and componentWillUnmount.
// Today, functional components with hooks are more commonly used because they are simpler and cleaner.

// import React from "react";
// import ReactDOM from "react-dom/client";

// class Menu extends React.Component {
//   render() {
//     let menus = ['Home', 'About', 'Services', 'Contact'];

//     return (
//       <header>
//         <ul>
//           {menus.map((menu, index) => (
//             <li key={index}>{menu}</li>
//           ))}
//         </ul>
//       </header>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <>
//     <Menu />
//   </>
// );


// // how to export class component
// export default Menu;


// additional example of class component
// import React from "react";
// import ReactDOM from "react-dom/client";

// class Footer extends React.Component{
//     render() {
//         let footer1 = ['about us', 'contact us', 'support', 'Help', 'Phone'];
//         return(
//             <footer>
//                 <ul>
//                     {footer1.map((fun, i) => (
//                         <li key={i}>{fun}</li>
//                     ))}
//                 </ul>
//             </footer>
//         )
//     }
// }

// export default Footer;

// import React from "react";
// import ReactDOM from "react-dom/client";

// class Divcomponent extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>hello this is div tag</h1>
//                 <ul>
//                   <li>Steev</li>
//                     <li>Nancy</li>
//                     <li>Will</li>
//                     <li>Eleven</li>
//                 </ul>
//             </div>
//         )
//     }
// }

// const rootele = ReactDOM.createRoot(document.getElementById('root'));
// rootele.render(
//     <divcomponent />
// )

// export default Divcomponent;


// functional components example
import React from "react"
import ReactDOM from 'react-dom/client'
function Calculator(){
    let sum = 5+4;
    let diff = 5-4;
    let divide = 10/2;
    let reminder = 10%3;

    return(
        <>
            <p>sum of two elements {sum} </p>
            <p>difference of two elements {diff}</p>
            <p>divide of two elements {divide}</p>
            <p>reminder of two elements {reminder}</p>
        </>
    )
}

let rootrender = ReactDOM.createRoot(document.getElementById('root'));

rootrender.render(
    <>
        <Calculator />
    </>
)

export default Calculator;

