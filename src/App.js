import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import PlanLayout from "./pages/Layouts/PlanLayout";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PlanLayout>
          <Welcome />
        </PlanLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
