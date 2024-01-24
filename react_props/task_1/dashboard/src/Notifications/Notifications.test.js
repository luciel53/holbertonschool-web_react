import { configure, shallow } from 'enzyme';
import Notifications from './Notifications';
import { BrowserRouter as Router } from 'react-router-dom';



describe('Notifications test', () => {
  it('should renders without crashing', () => {
    shallow(
      <Router>
        <Notifications />
      </Router>);
  });

  it('Notifications renders three list items', () => {
    const notifs = shallow(<Notifications />);
    expect(notifs.find('li').length).toBe(3);
  });

  it('Notifications should render the text Here is the list of notifications', () => {
    const notifs = shallow(<Notifications />);
    expect(appComp.text()).toContain('Here is the list of notifications');
  });
});
