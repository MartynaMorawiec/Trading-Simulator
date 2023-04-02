import Home from "./components/home/Home";
import { MantineProvider } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Register" element={<SignUp />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
