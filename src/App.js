import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AvaialbeSlot from "./pages/AvaialbeSlot";
import CheckOutForm from "./pages/CheckOutForm";
import Home from "./pages/Home";
import { store } from "./store/store";
// Added a routes 
function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />}>
              {" "}
            </Route>

            <Route path="/available-seats" element={<AvaialbeSlot />} />
            <Route path="/check-out" element={<CheckOutForm />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </Router>

       
      </Provider>
    </ChakraProvider>
  );
}

export default App;
