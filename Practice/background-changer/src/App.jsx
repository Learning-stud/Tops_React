import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const [message, setMessage] = useState("");

  const changeColor = (newColor) => {
    setColor(newColor);
    setMessage("Areeeeeee Wahhhhhhh " + newColor);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="justify-center align-middle flex pt-5 text-2xl bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-3 rounded-md">
          <button
            onClick={() => changeColor("red")}
            className="outline-none px-4 py-1 text-white shadow-xl bg-red-600 rounded-md"
          >
            {" "}
            Red{" "}
          </button>
          <button
            onClick={() => changeColor("green")}
            className="outline-none px-4 py-1 text-white shadow-xl bg-green-600 rounded-md"
          >
            {" "}
            Green{" "}
          </button>
          <button
            onClick={() => changeColor("blue")}
            className="outline-none px-4 py-1 text-white shadow-xl bg-blue-500 rounded-md"
          >
            {" "}
            Blue{" "}
          </button>
          <button
            onClick={() => changeColor("orange")}
            className="outline-none px-4 py-1 text-white shadow-xl bg-orange-500 rounded-md"
          >
            {" "}
            orange{" "}
          </button>
          <button
            onClick={() => changeColor("purple")}
            className="outline-none px-4 py-1 text-white shadow-xl bg-purple-600 rounded-md"
          >
            {" "}
            purple{" "}
          </button>
        </div>
      </div>
      <div className="  text-3xl text-slate-50  text-center justify-center pt-96 ">
        {message}
      </div>
    </div>
  );
}

export default App;
