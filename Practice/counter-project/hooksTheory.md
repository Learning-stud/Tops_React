## useState hook is responsible for changing its state.. meaning of change is not that ,it will change the value it will propogate in ( UI )/DOM

## what we can pass in useState para 

# we can pass any variable anything string , variables , object anything we want to pass, we have to also take variable in useState 

## We get two things in array formet , first thing which we get is syntex of useStae array on the index number can be anything whatever you want to give and secong will in array is [FUNCTION] its and method or convention...

```

function App() {
  const [counter, setCounter] = useState(0);
  /*  For Addition */
  const addValue = () => {
    console.log("clicked", Math.random);
    // counter = counter + 1;
    setCounter(counter + 1);
  };
  /*  for SubStracTion  */
  const minusValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1> React </h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}> Add Value </button>
      <br />
      <button onClick={minusValue}> Remove Value </button>
    </>
  );
}
```