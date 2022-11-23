import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike!" age="32" /> */}
      {/* <StatefulGreeting /> */}
      {/* <StatefulGreetingWithCallback greeting="I'm a stateful class component!" /> */}
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
