import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import QRCodePage from './components/QRCodePage';
import FireSafetyForm from './components/FireSafetyForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/apply-certificate" component={FireSafetyForm} />
          <Route path="/generate-qr-code" component={QRCodePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
