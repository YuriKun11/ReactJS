** firstLesson.jsx (Source code)

import React from 'react'
import ReactDOM from 'react-dom';

class Name extends React.Component {

    render() {
      const name = "Yuri Kun";
      const age = 20;
      return(
        <div>
             <h1>Hello, {name}</h1>             
        </div>
        )
    }
  }

const firstLesson = () => {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Name />);
    // or you can use this code below
    // ReactDOM.render(<Car />, document.getElementById('root'));
  return (
    <div>

    </div>
  )
}

export default firstLesson

---------------------------------------------------------------------------------

**App.js (Source code)


import logo from './logo.svg';
import './App.css';

import FirstLesson from './component/jsxfolder/firstLesson.jsx';

function App() {
  return (
    <div className="App">
     <FirstLesson />
    </div>
  );
}

export default App;



