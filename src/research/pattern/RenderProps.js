// https://www.patterns.dev/posts/render-props-pattern/

import React from 'react';
import { render } from 'react-dom';

import './styles.css';

const Title = (props) => props.render();

render(
  <div className='App'>
    <Title
      render={() => (
        <h1>
          <span role='img' aria-label='emoji'>
            ✨
          </span>
          I am a render prop!{' '}
          <span role='img' aria-label='emoji'>
            ✨
          </span>
        </h1>
      )}
    />
  </div>,
  document.getElementById('root')
);

render(
  <div className='App'>
    <Title render={() => <h1>✨ First render prop! ✨</h1>} />
    <Title render={() => <h2>🔥 Second render prop! 🔥</h2>} />
    <Title render={() => <h3>🚀 Third render prop! 🚀</h3>} />
  </div>
);


function Component(props) {
  const data = { ... }
  return props.render(data)
}
// The render prop can now receive this value that we passed as its argument.
<Component render={data => <ChildComponent data={data} />}

// Perfect usecase: Lifting state

function Input(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.render(value)}
    </>
  );
}

function Input() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder="Temp in °C"
    />
  );
}

function Kelvin({ value = 0 }) {
  return <div className="temp">{value + 273.15}K</div>;
}

function Fahrenheit({ value = 0 }) {
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>;
}

  function App() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input
        render={value => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}

// Basically a callback that returns JSX