import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MyClassesPage from './pages/my-classes/my-classes.component';
import AttendanceListPage from './pages/attendance-list/attendance-list.component';

const Routes = createAppContainer(
  createStackNavigator({
    MyClasses: MyClassesPage,
    AttendanceList: AttendanceListPage,
  },
  {
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#F55E5E',
      },
      headerTintColor: '#fff',
    },
  }),
);

export default Routes;
