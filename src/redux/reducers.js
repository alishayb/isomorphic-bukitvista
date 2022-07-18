import App from './app/reducer';
import Box from './box/reducer';
import ThemeSwitcher from './themeSwitcher/reducer';
import LanguageSwitcher from './languageSwitcher/reducer';
import DevReducers from '../customApp/redux/reducers';

export default {
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Box,
  ...DevReducers,
};
