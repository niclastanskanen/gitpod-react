import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* <FunctionalGreetingWithProps greeting="nice to meet you!" name="Mike!" age="32" /> */}
      {/* <StatefulGreeting /> */}
      {/* <StatefulGreetingWithCallback greeting="I'm a stateful class component!" /> */}
      {/* <StatefulGreetingWithPrevState /> */}
      {/* <EventsFunctional /> */}
      {/* <EventsClass /> */}
      <EventBinding />
    </div>
  );
}

export default App;
