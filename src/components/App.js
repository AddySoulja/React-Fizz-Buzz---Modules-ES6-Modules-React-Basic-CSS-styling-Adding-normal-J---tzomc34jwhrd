import React, {useState}from 'react'
import '../styles/App.css';
const App = () => {
const [count, setCount] = useState(1);

const increment= () => {
  setCount((val) => val+1);
}
const decrement= () => {
  setCount((val) => val > 0 ? val-1 : val);
}
function getState(val){
  if(val % 3 == 0){
    return 'fizz';
  } else if(val % 5 == 0){
    return 'buzz';
  }else if(val % 3 == 0 && val % 5 == 0){
    return 'fizzbuzz';
  }else {
    return 'normal';
  }
}
const state = getState(count);
  
  return (
    <>
      <div id="main">
        <button onClick={increment}>Increase</button>
        <div id="counter" className={state}>{count}</div>
        <button onClick={decrement}>Decrease</button>
      </div>
    </>
  )
}


export default App;
