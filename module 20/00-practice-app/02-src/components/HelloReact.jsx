// TODO: Add a comment explaining what a react component is
// HelloReact is a react component
// In this case, it is used as a child component of the App component
// It is a function that returns some visual content (i.e. a component)
// Components are all written in a language called JSX
function HelloReact() {
  const text = 'hahahahahahaha';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a language that allows us to write & output HTML in JavaScript
  // The curly braces are used to process JS code inside JSX
    // Curly braces are effectively template literal placeholders, i.e. `${text}`
  return <h2>Hello World! Here is {text}</h2>;
}

export default HelloReact;
