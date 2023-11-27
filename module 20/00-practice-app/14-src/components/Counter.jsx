import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// 'default' specifies the default export of this file
// i.e. if a user imports this file without specifying which function they want to import, this function will be imported by default
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // useState(0) is a hook that returns an array with two elements
  // the first element is the current state, and the second is a variable that can be used to update the state
  // these two elements are initially destructured from the useState(0) hook
  // count is the current value of the counter, and setCount is used to update the value of the counter in the code
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // increases the count by 1
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // decreases the count by 1
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      <CardBody
        count={count} // the text of the counter is set to the value of count
        handleIncrement={handleIncrement} // the increment button is assigned the increment function as an event listener
        handleDecrement={handleDecrement} // the decrement button is assigned the decrement function as an event listener
      />
    </div>
  );
}
