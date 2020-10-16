import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile145553Navigator from '../features/UserProfile145553/navigator';
import Settings145552Navigator from '../features/Settings145552/navigator';
import Settings145550Navigator from '../features/Settings145550/navigator';
import SignIn2145548Navigator from '../features/SignIn2145548/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile145553: { screen: UserProfile145553Navigator },
Settings145552: { screen: Settings145552Navigator },
Settings145550: { screen: Settings145550Navigator },
SignIn2145548: { screen: SignIn2145548Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
