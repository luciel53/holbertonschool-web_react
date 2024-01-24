import { shallow } from 'enzyme';
import Notifications from './Notifications';



describe('Notifications test', () => {
  it('should renders without crashing', () => {
    shallow(
        <Notifications />
    );
  });

  it('Notifications renders three list items', () => {
    const notifs = shallow(<Notifications />);
    expect(notifs.find('li').length).toBe(3);
  });

  it('Notifications should render the text Here is the list of notifications', () => {
    const notifs = shallow(<Notifications />);
    expect(notifs.text()).toContain('Here is the list of notifications');
  });
});
