import React from 'react';
import Button from './components/button';
import './components/button'

function App() {
  return (
    <div className="App">
      <Button className="danger"> Hello </Button>
      <Button  disabled> Disabled Button </Button>
      <Button btnType='primary' size='lg'> Large Primary </Button>
      <Button size='sm'> Small Button</Button>
      <Button btnType='danger'> Danger Button</Button>
      <Button href="http://www.baidu.com" target="_blank" btnType='link'> Baidu Link </Button>
      <Button  href="http://www.baidu.com" disabled> Disabled Link </Button>
      <Button btnType="primary" shape="circle">Li</Button>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
        </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  ); 
}

export default App;
