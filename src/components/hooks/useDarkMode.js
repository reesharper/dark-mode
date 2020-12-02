import { useLocalStorage } from './useLocalStorage';

export const UseDarkMode = () => {

  const [value, setValue] = useLocalStorage("mode")

  return [value, setValue];

}