// import './App.css';

import 'bulma/css/bulma.min.css'
import Button from './components/button';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar> </Navbar>
     <h1>Testing track, the app for musicians 🎼</h1>
     <Button>click me</Button> 
    </div>
  );
}

export default App;
