import { shallow } from 'enzyme';
import App from './App';


describe('App compenents test', () => {
  it('should renders without crashing', () => {
    shallow(
        <App />
    );
  });

  it('renders a div with class App-header', () => {
    const appComp = shallow(<App />);
    expect(appComp.find('.App-header').length).toBe(1);
  });

  it('renders a div with class App-body', () => {
    const appComp = shallow(<App />);
    expect(appComp.find('.App-body').length).toBe(1);
  });

  it('renders a div with class App-footer', () => {
    const appComp = shallow(<App />);
    expect(appComp.find('.App-footer').length).toBe(1);
  });
});
