import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import PlanLayout from "./pages/Layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PlanLayout>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/invite" element={<PhoneConfirmation />} />
          </Routes>
        </PlanLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
