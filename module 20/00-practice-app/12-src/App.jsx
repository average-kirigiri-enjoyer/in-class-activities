// First we import Greeting from the components folder
import Greeting from "./components/Greeting";

const welcomeStudent = (event) => {
  alert(`Welcome, ${event.target.textContent}!`);
}

// Our App component returns the Greeting component
function App() {
  return <Greeting clickHandler={welcomeStudent}/>;
}

export default App;
