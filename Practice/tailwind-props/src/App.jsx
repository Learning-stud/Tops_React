import "./App.css";
import Cards from "./components/Cards";
function App() {

  return (
    <>
     <h1 className="font-mono text-lg p-5  " >Tailwind - Test</h1>
      <Cards   username ="jay" studying="fullstack" field="it" using="laptop" />
      <Cards/>

    </>
  );
}

export default App;
