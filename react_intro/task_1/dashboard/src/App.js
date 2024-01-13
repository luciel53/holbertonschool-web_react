import logo from './logo.jpg';
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
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(isIndexPage)}</p>
      </footer>
    </div>
  );
}

export default App;
