import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings91721Navigator from '../features/Settings91721/navigator';
import Settings91706Navigator from '../features/Settings91706/navigator';
import NotificationList91705Navigator from '../features/NotificationList91705/navigator';
import Maps91704Navigator from '../features/Maps91704/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings91721: { screen: Settings91721Navigator },
Settings91706: { screen: Settings91706Navigator },
NotificationList91705: { screen: NotificationList91705Navigator },
Maps91704: { screen: Maps91704Navigator },

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
