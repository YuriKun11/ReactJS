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