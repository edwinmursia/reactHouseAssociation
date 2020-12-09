import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <p>Taloyhtiö</p>
  </div>
)

const myfirstelement = <h1> Hello react</h1>


ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(<myfirstelement />, document.getElementById('root'))