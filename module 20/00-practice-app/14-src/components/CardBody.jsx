// TODO: Add a comment explaining what is being passed to this "child" component as props
// props.count tracks the current count of the buttons!
// props.handleIncrement is a function used to increment the count by 1
// props.handleDecrement is a function used to decrement the count by 1

function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}
      >
        Increment
      </button>{' '}
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CardBody;
