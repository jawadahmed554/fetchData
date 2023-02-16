import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import fetchData from './fetchData';

function App() {
  const [count, setCount] = useState(0);
  const [dataa, setData] = useState('');
  const [arr, setArr] = useState<any[]>([]);
  const [curIndex, setCurIndex] = useState(1);
  // const [arrShow, setArrShow] = useState<any[]>([]);

  const nextHandler = () => {
    setCurIndex(curIndex + 1);
    fetchData(curIndex).then((data) => {
      // setArr((prev) => [...prev, ...data]);
      setArr([...data]);
      // console.log(arr.length);
      // setCurIndex(arr.length - 10);
      // setArrShow([...arr.slice(curIndex, curIndex + 10)]);
    });
  };

  useEffect(() => {
    fetchData(curIndex).then((data) => {
      setData(JSON.stringify(data, null, 3));
      setArr(data);
      // setArrShow(data.slice(0, 10));
    });
  }, []);

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="App">
        <button onClick={countHandler}>{count}</button>
        <button onClick={() => console.log(arr)}>click</button>
        <button onClick={nextHandler}>next</button>
        {/* <pre>{dataa}</pre> */}

        {arr.map((item, index) => (
          <div key={index}>
            <div>{item.name.first}</div>
            <img src={item.picture.large} alt="pic" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
