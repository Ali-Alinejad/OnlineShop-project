// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import MainPage from "./sections/MainPage/MainPage";

function App() {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider>
      <MainPage />
    </NextUIProvider>
  );
}

export default App;
