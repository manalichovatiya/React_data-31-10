import './App.css';
import { data } from './Data';
import { useState } from 'react';

function App() {
 const arr = data;
  const [val, setval] = useState("");
  const set = (v) => {
    setval({ ...val, [v.target.name]: v.target.value });
    console.log(val);
  }
  const enterData = (e) => {
    console.log("ohk");
  }

  return (
    <div className="App">
      <div className='mt-4'>
        <input type='text' name='title' onChange={set} />
        <input type='text' name='auther' onChange={set} />
        <button onClick={enterData}>Add</button>
      </div>
      <div>
        {arr.map((e, i) => (
          <div>
            <h3>{e.title}</h3>
            <p>{e.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
