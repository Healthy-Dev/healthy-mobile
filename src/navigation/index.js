import { Navigation } from 'react-native-navigation';

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
        children: [setBottomTab(Screens.HOME), setBottomTab(Screens.SEARCH), setBottomTab(Screens.PROFILE)],
      },
    },
  });
};

const setBottomTab = (nameTab, icon) => ({
  component: {
    name: nameTab,
    options: {
      bottomTab: {
        text: nameTab,
        icon,
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
  });
};
