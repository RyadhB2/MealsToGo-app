import React from "react";
import { RestaurentsScreen } from "./src/features/restaurents/screens/restaurents.screen";
import { ThemeProvider } from "styled-components";
import {theme} from './src/infrastructure/theme/index'
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurentsScreen />
      </ThemeProvider>
    </>
  );
}
