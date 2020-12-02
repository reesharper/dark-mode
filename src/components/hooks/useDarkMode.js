import { useLocalStorage } from './useLocalStorage';
import usePrefersDarkMode from './usePrefersDarkMode'

export const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage("dark-mode")

  const prefersDarkMode = usePrefersDarkMode();

  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

  return [enabled, setEnabledState];
};
