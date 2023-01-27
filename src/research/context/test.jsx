import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom';

const languages = ['JavaScript', 'Python'];
const LanguageContext = createContext(null);
function App() {
  // implement Context here so can be used in child components

  const [state, setState] = useState(languages);

  const toggleLanguage = (array, id) => {
    const selected = array.find((elem) => elem === id);

    if (selected) {
      return true;
    }
    return false;
  };

  return (
    <LanguageContext.Provider value={{ toggleLanguage, state }}>
      <MainSection />
    </LanguageContext.Provider>
  );
}

function MainSection() {
  const { state, toggleLanguage } = useContext(LanguageContext);

  console.log(state);

  return (
    <div>
      {state.map((l) => {
        return (
          <>
            <p id='favoriteLanguage'> Favorite programing language: {l} </p>
            <button id='changeFavorite' onClick={toggleLanguage}>
              {' '}
              Toggle language{' '}
            </button>
          </>
        );
      })}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
