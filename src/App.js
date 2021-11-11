import logo from './logo.svg';
import './App.css';
import GitCalendar from './GitCalendar/GitCalendar';
import GitTimeline from './GitTimeline/GitTimeline';

function App() {
  return (
    <div className="App">
       <GitCalendar/>
       <GitTimeline/>
    </div>
  );
}

export default App;
