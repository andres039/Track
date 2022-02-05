import './App.css';
import 'bulma/css/bulma.min.css';
import Button from './components/button';
import Calendars from './components/calendar';
import Navbar from './components/navbar';
import Form from './components/registration';
function App() {
  return (
    <div className='App'>
      <Navbar> </Navbar>
      <h1>Testing track, the app for musicians 🎼</h1>
      <Button>click me</Button>
      <Calendars />
      <Form />
    </div>
  );
}

export default App;
