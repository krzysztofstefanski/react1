import React from 'react';
import logo from './logo.svg';
import './App.css';


const  appClassPrefix = 'App'


const App = () =>(
      <div className={`${appClassPrefix}`}>
        <header className={`${appClassPrefix}-header`}>
          <img src={logo} className={`${appClassPrefix}-logo`} alt={'logo'} />
          <h1 className={`${appClassPrefix}-title`}>Welcome to React</h1>
        </header>
        <p className={`${appClassPrefix}-intro`}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );

export default App;
