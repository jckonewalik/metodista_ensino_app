import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MyClassesPage from './pages/my-classes/my-classes.component';
import AttendancePage from './pages/attendance/attendance.component';
import AttendanceComplementPage from './pages/attendance-complement/attendance-complement.component';

const Routes = createAppContainer(
  createStackNavigator({
    MyClasses: MyClassesPage,
    Attendance: AttendancePage,
    AttendanceComplement: AttendanceComplementPage,
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
