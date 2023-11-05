import './App.css';
import { data } from './Data';
import { useEffect, useState } from 'react';

function App() {
  const [val, setVal] = useState({});
  const [result, setResult] = useState([]);
  const set = (v) => {
    setVal({ ...val, [v.target.name]: v.target.value });
  };
  const enterData = () => {
    setResult([...result, val]);
  };
  useEffect(() => {
    setResult(data);
  }, []);

  const deleteData = (author) => {
    setResult(result.filter((e) => e.author !== author));
  };

  return (
    <div className="App">
      <div className='mt-4'>
        <input type='text' name='title' onChange={set} />
        <input type='text' name='author' onChange={set} />
        <button onClick={enterData} className='btn btn-secondary btn-lg"'>Add</button>
      </div>
      <div>
        {result?.map((val, ind) => {
          return (
            <>
              <h3>{val.author}</h3>
              <p>{val.title}</p>
              <button onClick={() => deleteData(val.author)} className='btn btn-secondary btn-lg"'>Delete</button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
