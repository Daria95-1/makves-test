import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Sidebar from "./components/Sidebar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { lightTheme, darkTheme } from './theme/theme';

library.add(fas);

export default function App() {
  const [theme, setTheme] = useState('light');
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Sidebar color={theme} toggleTheme={() => setTheme(t => t === 'light' ? 'dark' : 'light')} />
    </ThemeProvider>
  );
}
