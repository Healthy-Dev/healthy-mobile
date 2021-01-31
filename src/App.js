import { Navigation } from 'react-native-navigation';

import { registerSreens, setDefaultOptions, startOnboardingScreen } from './navigation';

registerSreens();

setDefaultOptions();

Navigation.events().registerAppLaunchedListener(() => {
  startOnboardingScreen();
});
