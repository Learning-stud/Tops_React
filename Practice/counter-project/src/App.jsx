import "./App.css";

function App() {
  let counter = 15;

  const addValue = () => {
    console.log("clicked",Math.random );
    counter = counter + 1
  }
  return (
    <>
      <h1> React </h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}> Add Value </button>
      <br />
      <button> Remove Value </button>
    </>
  );
}

export default App;
