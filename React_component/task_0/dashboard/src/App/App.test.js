import { configure, shallow } from 'enzyme';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App compenents test', () => {
  it('should renders without crashing', () => {
    shallow(
      <Router>
        <App />
      </Router>
    );
  });

  it('renders a div with class App-header', () => {
    const appComp = shallow(<App />);
    expect(appComp.find('App-header').length).toBe(1);
  });

  it('renders a div with class App-body', () => {
    const appComp = shallow(<App />);
    expect(appComp.find('App-body').length).toBe(1);
  });

  it('renders a div with class App-footer', () => {
    const appComp = shallow(<App />);
    expect(appComp.find('App-footer').length).toBe(1);
  });
});
