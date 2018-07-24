//imports from npm packages
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//import external resources
import './index.css'



//import my own componets
import App from './App'


//wywolanie funkcji
ReactDOM.render(
<MuiThemeProvider>
    <App />
    </ MuiThemeProvider>,


 document.getElementById('root')
)




