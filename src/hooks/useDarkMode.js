import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("mode", true);

  return [value, setValue];
};

export default useDarkMode;
