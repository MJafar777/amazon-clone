import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Home />

        {/* <Routes>
          <Route exact path="/">
          </Route>
          <Route exact path="">
            <Home />
          </Route>
        </Routes> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
