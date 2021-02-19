import { Navigation } from 'react-native-navigation';

import { Colors } from '~/constants/colors';
import Home from '~/screens/Home';
import Onboarding from '~/screens/Onboarding';
import Profile from '~/screens/Profile';
import Search from '~/screens/Search';

import { Screens } from './screens';

export const registerSreens = () => {
  registerComponent(Screens.ONBOARDING, Onboarding);
  registerComponent(Screens.HOME, Home);
  registerComponent(Screens.SEARCH, Search);
  registerComponent(Screens.PROFILE, Profile);
};

const registerComponent = (componentName, Component) => {
  Navigation.registerComponent(componentName, () => Component);
};

export const startBottomTabs = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          setBottomTab(Screens.HOME, require('~/assets/home.png')),
          setBottomTab(Screens.SEARCH, require('~/assets/search.png')),
          setBottomTab(Screens.PROFILE, require('~/assets/user.png')),
        ],
        options: {
          bottomTabs: {
            backgroundColor: Colors.PRIMARY,
            currentTabIndex: 0,
            animate: false,
            hideShadow: false,
            titleDisplayMode: 'alwaysHide',
            elevation: 50,
            preferLargeIcons: true,
          },
          navigationBar: {
            color: 'red',
          },
        },
      },
    },
  });
};

const setBottomTab = (nameTab, icon) => ({
  component: {
    name: nameTab,
    options: {
      bottomTab: {
        icon,
        iconColor: 'white',
        selectedIconColor: 'yellow',
        iconWidth: 30,
        iconHeight: 30,
      },
    },
  },
});

export const startOnboardingScreen = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: Screens.ONBOARDING,
      },
    },
  });
};

export const setDefaultOptions = () => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
    },
    navigationBar: {
      backgroundColor: Colors.NAVIGATION_BAR_COLOR,
    },
  });
};
