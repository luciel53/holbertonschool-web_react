import logo from './logo.jpg';
import _ from 'lodash';
import './App.css';
import './Notifications.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  const isIndexPage = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password"></input>
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(isIndexPage)}</p>
      </footer>
    </div>
  );
}

export default App;
