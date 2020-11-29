import React from 'react';
import Button from './components/button';
import './components/button'

function App() {
  return (
    <div className="App">
      <Button className="btn-primary"> Hello </Button>
      <Button  disabled> Disabled Button </Button>
      <Button btnType='primary' size='lg'> Large Primary </Button>
      <Button > Small Danger </Button>
      <Button  href="http://www.baidu.com" target="_blank"> Baidu Link </Button>
      <Button  href="http://www.baidu.com" disabled> Disabled Link </Button>
    </div>
  );
}

export default App;
