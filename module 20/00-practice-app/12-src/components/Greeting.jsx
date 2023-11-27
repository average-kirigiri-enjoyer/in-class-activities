function Greeting(props) {
  
  return (
    <div className="container text-center">
      <h2>Welcome the Students!</h2>
      <div className="list-group">
        {/* TODO: Resolve the issue so that the welcomeStudent function properly alerts the name of the selected student when the button is clicked. */}
        <button 
          onClick={props.clickHandler} 
          className="list-group-item list-group-item-action"
        >
            Mary
        </button>
        <button 
          onClick={props.clickHandler} 
          className="list-group-item list-group-item-action"
        >
            Cole
        </button>
        <button 
          onClick={props.clickHandler} 
          className="list-group-item list-group-item-action"
        >
            Rebecca
        </button>
      </div>
    </div>
  );
}

export default Greeting;
