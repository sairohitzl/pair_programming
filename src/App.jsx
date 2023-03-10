import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const serverUrl = "http://localhost:3000/tasks";

  const [taskData, setData] = useState([]);

  const handlerFunction = (event) => {
    setData(taskData.filter((item) => item.data.name == event.target.value));
    console.log(taskData);
    console.log("something..");
  };

  useEffect(() => {
    axios.get(serverUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  taskData.forEach((item) => {
    console.log(item.name);
  });

  return (
    <div className="App">
      <input
        type="text"
        placeholder="enter here"
        onChange={(e) => handlerFunction(e)}
      />
      <p>tasks</p>
      <ul>
        {taskData?.forEach((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
